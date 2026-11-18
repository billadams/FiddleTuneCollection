using Microsoft.AspNetCore.Mvc;

namespace FiddleTuneCollection.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FileController : ControllerBase
{
  private readonly string _fileStorageDirectory = @"C:\Server\Downloads\";
  private readonly IWebHostEnvironment _env;

  public FileController(IWebHostEnvironment env)
  {
    _env = env;
  }

  [HttpGet("download/{fileName}")]
  public async Task<IActionResult> DownloadPdf(string fileName)
  {
    var safeFileName = Path.GetFileName(fileName);
    var filePath = Path.Combine(_env.ContentRootPath, "Downloads", safeFileName);

    if (!System.IO.File.Exists(filePath))
    {
      return NotFound("The requested file was not found.");
    }

    var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read);
    return File(fileStream, "application/pdf", safeFileName); 
  }

  //[HttpGet("upload/{fileName}")]
  //public IActionResult Upload(string fileName)
  //{

  //}
}
