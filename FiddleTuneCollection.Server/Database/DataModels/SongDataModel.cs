namespace FiddleTuneCollection.Server.Database.DataModels;

public class SongDataModel
{
  public int SongID { get; set; }
  public required string Title { get; set; }
  public string? Filename { get; set; }
  public string? Label { get; set; }
  public int? DownloadTypeID { get; set; }
  public string? DownloadType { get; set; }

  public SongDataModel(int songID, string title, string? filename, string? label, int? downloadTypeID, string? downloadType)
  {
    SongID = songID;
    Title = title;
    Filename = filename;
    Label = label;
    DownloadTypeID = downloadTypeID;
    DownloadType = downloadType;
  }
}
