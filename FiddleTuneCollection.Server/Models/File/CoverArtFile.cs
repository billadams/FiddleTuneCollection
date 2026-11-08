using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class CoverArtFile : IFile
{
  public int ID { get; set; }
  public string FileName { get; set; }

  public CoverArtFile(int id, string fileName)
  {
    ID = id;
    FileName = fileName;
  }
}
