using FiddleTuneCollection.Server.Models.Interfaces;

namespace FiddleTuneCollection.Server.Models.File;

public class VideoFile : IFileDownload
{
  //public int ID { get; set; }
  public string FileName { get; set; }
  public string Label { get; set; }
  public int DownloadTypeID { get; set; }
  public string DownloadType { get; set; }

  public VideoFile(string fileName, string label, int downloadTypeID, string downloadType)
  {
    FileName = fileName;
    Label = label;
    DownloadTypeID = downloadTypeID;
    DownloadType = downloadType;
  }
}
