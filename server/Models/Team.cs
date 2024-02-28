using server.Models;

public class Team: Base
{
    public required string Name { get; set; }
    public List<Player> Players { get; set; } = null!;
}