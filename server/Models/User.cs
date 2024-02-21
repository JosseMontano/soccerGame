namespace server.Models
{
    public class User: Base
    {
        public required string Gmail { get; set; }
        public required string Password { get; set; }
    }
}