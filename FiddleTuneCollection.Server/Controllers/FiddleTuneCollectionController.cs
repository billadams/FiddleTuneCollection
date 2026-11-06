using FiddleTuneCollection.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace FiddleTuneCollection.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FiddleTuneCollectionController : ControllerBase
{
  [HttpGet]
  public JsonResult Get()
  {
    return new JsonResult(Song.GetSongs());
  }
}
