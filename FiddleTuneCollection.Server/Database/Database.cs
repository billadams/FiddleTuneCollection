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
      int songID = reader.GetInt32(reader.GetOrdinal("SongID"));
      var title = reader.GetString(reader.GetOrdinal("Title"));
      string? filename = reader.IsDBNull(reader.GetOrdinal("Filename")) ? null : reader.GetString(reader.GetOrdinal("Filename"));
      string? label = reader.IsDBNull(reader.GetOrdinal("Label")) ? null : reader.GetString(reader.GetOrdinal("Label"));
      int? downloadTypeID = reader.IsDBNull(reader.GetOrdinal("DownloadTypeID")) ? null : reader.GetInt32(reader.GetOrdinal("DownloadTypeID"));
      string? downloadType = reader.IsDBNull(reader.GetOrdinal("DownloadType")) ? null : reader.GetString(reader.GetOrdinal("DownloadType"));

      var song = new SongDataModel(songID, title, filename, label, downloadTypeID, downloadType);

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
