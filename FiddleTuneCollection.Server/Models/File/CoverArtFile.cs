using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class CoverArtFile : IFile
{
  public int ID { get; set; }
  public string Path { get; set; }

  public CoverArtFile(int id, string path)
  {
    ID = id;
    Path = path;
  }
}
