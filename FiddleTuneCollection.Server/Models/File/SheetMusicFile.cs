using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class SheetMusicFile : IFile
{
  public int ID { get; set; }
  public string Path { get; set; }

  public SheetMusicFile(int id, string path)
  {
    ID = id;
    Path = path;
  }     
}
