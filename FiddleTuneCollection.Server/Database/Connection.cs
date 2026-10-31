using FiddleTuneCollection.Server.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace FiddleTuneCollection.Server.Database;

public class Connection
{
  private SqlConnection _connection;
  private readonly string _connectionString;
  //private readonly IConfiguration _configuration;

  public Connection(IConfiguration configuration)
  {
    //_configuration = configuration;
    _connectionString = configuration["ConnectionStrings:AZURE_SQL_CONNECTIONSTRING"];
    InitializeConnection();
  }

  private void InitializeConnection()
  {
    _connection = new SqlConnection(_connectionString);
  }

  public List<Song> GetAllSongs()
  {
    var songs = new List<Song>();
    
    using var command = new SqlCommand("dbo.GetAllSongs", _connection);
    command.CommandType = CommandType.StoredProcedure; 

    using SqlDataReader reader = command.ExecuteReader();
    while (reader.Read())
    {
      var song = new Song
      {
        ID = reader.GetInt32(0),
        Title = reader.GetString(1),
        Artist = reader.GetString(2)
      };
      songs.Add(song);
    }

    return songs;
  }
}
