using FiddleTuneCollection.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace FiddleTuneCollection.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FiddleTuneCollectionController : ControllerBase
{
  [HttpGet(Name = "GetSongs")]
  public List<Song> Get()
  {
    return Song.GetSongs();
  }
}
