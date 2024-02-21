namespace server.Dtos
{
    public class RegisterDTO
    {
        public required string Correo { get; set; }
        public required string Password { get; set; }
        public required string ConfirmPassword { get; set; }
    }

}