using System.Data;
using FiddleTuneCollection.Server.Database.DataModels;
using Microsoft.Data.SqlClient;

namespace FiddleTuneCollection.Server.Database;

public class Database
{
  private readonly SqlConnection _connection;
  private readonly string _connectionString;

  public Database(IConfiguration configuration)
  {
    try
    {
      _connectionString = configuration["ConnectionStrings:AZURE_SQL_CONNECTIONSTRING"]!;
      _connection = new SqlConnection(_connectionString);
      _connection.Open();
    }
    catch (Exception ex)
    {
      Console.WriteLine($"Error initializing database connection: {ex.Message}");
      throw;
    }
  }

  public List<SongDataModel> GetAllSongs()
  {
    var songs = new List<SongDataModel>();
    
    using var command = new SqlCommand("dbo.Pr_GetSongs", _connection);
    command.CommandType = CommandType.StoredProcedure;

    // Add parameters when needed.

    OpenConnection();

    using SqlDataReader reader = command.ExecuteReader();
    while(reader.Read())
    {
      var song = new SongDataModel
      {
        SongID = reader.GetInt32(reader.GetOrdinal("SongID")),
        Title = reader.GetString(reader.GetOrdinal("Title")),
        DownloadPath = reader.GetString(reader.GetOrdinal("DownloadPath")),
        DownloadType = reader.GetString(reader.GetOrdinal("DownloadType")),
      };
      songs.Add(song);
    }

    CloseConnection();

    return songs;
  }

  private void OpenConnection()
  {
    _connection.Open();
  }

  private void CloseConnection()
  {
    _connection.Close();
  }
}
