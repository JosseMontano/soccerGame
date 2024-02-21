using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Constants;
using server.Data;
using server.Dtos;
using server.Models;
using server.Utils;

namespace server.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController : ControllerBase
    {
        private readonly DBContext _db;
        Response res = new();
        private readonly Response response = new Response();
        public AuthController(DBContext db)
        {
            _db = db;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDTO body)
        {
            var existUser = await _db.Users.AnyAsync(x => x.Gmail == body.Gmail);
            if (existUser) return res.BadRequestResponse(Messages.Auth.EXISTSUSERNAME);

            //? validate password 
            if (body.Password != body.ConfirmPassword) return res.BadRequestResponse(Messages.Auth.ERRORPASSWORDBODY);

            var user = new User
            {
                Gmail = body.Gmail,
                Password = body.Password
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            return res.SuccessResponse(Messages.Auth.CREATED, user);
        }
    }
}