using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class AudioFile : IFile
{
  public int ID { get; set; }
  public string Path { get; set; }

  public AudioFile(int id, string path)
  {
    ID = id;
    Path = path;
  }
}
