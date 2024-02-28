using server.Models;

public class Player: Base
{
    public required string Ci { get; set; }
    public required string Names { get; set; }
    public required string LastNames { get; set; }
    public required int Age { get; set; }
    public required string Date { get; set; }
    public required string Cellphone { get; set; }
    public required int TeamId { get; set; }

    public Team Team { get; set; } = null!;
}