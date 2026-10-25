using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class VideoFile : IFile
{
  public int ID { get; set; }
  public string Path { get; set; }

  public VideoFile(int id, string path)
  {
    ID = id;
    Path = path;
  }
}
