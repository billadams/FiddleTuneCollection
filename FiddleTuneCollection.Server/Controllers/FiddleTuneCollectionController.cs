using FiddleTuneCollection.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace FiddleTuneCollection.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class FiddleTuneCollectionController : ControllerBase
{
  [HttpGet(Name = "GetSongs")]
  public List<Song> Get()
  {
    var songs = new List<Song>
          {
              new Song { Id = 1, Title = "Song 1", Artist = "Artist 1" },
              new Song { Id = 2, Title = "Song 2", Artist = "Artist 2" },
              new Song { Id = 3, Title = "Song 3", Artist = "Artist 3" }
          };
    return songs;
  }
}
