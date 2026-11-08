using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class VideoFile : IFile
{
  //public int ID { get; set; }
  public string FileName { get; set; }

  public VideoFile(string fileName)
  {
    FileName = fileName;
  }

  //public VideoFile(int id, string path)
  //{
  //  ID = id;
  //  Path = path;
  //}
}
