namespace FiddleTuneCollection.Server.Models.Interfaces;

public interface IFileDownload : IFile
{
  public string Label { get; set; }
  public int DownloadTypeID { get; set; }
  public string DownloadType { get; set; }
}
