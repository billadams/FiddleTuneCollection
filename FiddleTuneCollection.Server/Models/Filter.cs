namespace FiddleTuneCollection.Server.Models;

public class Filter
{
  public string Name { get; set; }
  public string Value { get; set; }

  public Filter(string name, string value)
  {
    Name = name;
    Value = value;
  }
}
