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
    while (reader.Read())
    {
      var songID = reader.GetInt32(reader.GetOrdinal("SongID"));
      var title = reader.GetString(reader.GetOrdinal("Title"));
      string? downloadPath = reader.IsDBNull(reader.GetOrdinal("DownloadPath")) ? null : reader.GetString(reader.GetOrdinal("DownloadPath"));
      string? downloadType = reader.IsDBNull(reader.GetOrdinal("DownloadType")) ? null : reader.GetString(reader.GetOrdinal("DownloadType"));

      var song = new SongDataModel
      {
        SongID = songID,
        Title = title,
        DownloadPath = downloadPath,
        DownloadType = downloadType,
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
