using Microsoft.AspNetCore.Mvc;

namespace FiddleTuneCollection.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AudioController : ControllerBase
{
  private readonly IWebHostEnvironment _env;

  public AudioController(IWebHostEnvironment env)
  {
    _env = env;
  }

  [HttpGet("stream/{fileName}")]
  public JsonResult StreamAudio(string fileName)
  {
    var filePath = Path.Combine(_env.ContentRootPath, "AudioFiles", fileName);

    if (!System.IO.File.Exists(filePath))
    {
      return new JsonResult(new { error = "File not found" }) { StatusCode = 404 };
    }

    // EnableFileStreamResult or FileStream supports range requests (seeking)
    var stream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read);

    var file = File(stream, "audio/mpeg", enableRangeProcessing: true);

    return new JsonResult(new { audioFile = file });

    //var fileBytes = System.IO.File.ReadAllBytes(filePath);
    //var base64String = Convert.ToBase64String(fileBytes);
    //return new JsonResult(new { audioData = base64String });
  }
}
