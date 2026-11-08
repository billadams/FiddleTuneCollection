using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class SheetMusicFile : IFile
{
  //public int ID { get; set; }
  public string FileName { get; set; }

  public SheetMusicFile(string fileName)
  {
    FileName = fileName;
  }

  //public SheetMusicFile(int id, string path)
  //{
  //  ID = id;
  //  Path = path;
  //}     
}
