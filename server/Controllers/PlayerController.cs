
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Constants;
using server.Data;
using server.Dtos;
using server.Models;
using server.Utils;
// do the controller of the model player
namespace server.Controllers
{
    [ApiController]
    [Route("player")]
    public class PlayerController : ControllerBase
    {
        private readonly SoccerGameDbContext db;
        Response res = new();
        public PlayerController(SoccerGameDbContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var players = db.Players;
            return res.SuccessResponse(Messages.Player.FOUND, players);
        }
        [HttpPost]
        public IActionResult Create(PlayerDto body)
        {
            Player player = new()
            {
                Ci = body.Ci,
                Names = body.Names,
                Lastnames = body.Lastnames,
                Age = body.Age,
                Date = body.Date,
                Cellphone = body.Cellphone,
                Photo = body.Photo,
                Teamid = body.TeamId
            };

            db.Players.Add(player);
            db.SaveChanges();
            return res.SuccessResponse(Messages.Player.CREATED, body);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, PlayerDto body)
        {
            var player = db.Players.Find(id);
            if (player == null) return res.NotFoundResponse(Messages.Player.NOTFOUND);
            player.Ci = body.Ci;
            player.Names = body.Names;
            player.Lastnames = body.Lastnames;
            player.Age = body.Age;
            player.Date = body.Date;
            player.Cellphone = body.Cellphone;
            player.Photo = body.Photo;
            player.Teamid = body.TeamId;
            db.SaveChanges();
            return res.SuccessResponse(Messages.Player.UPDATED, player);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var player = db.Players.Find(id);
            if (player == null) return res.NotFoundResponse(Messages.Player.NOTFOUND);
            db.Players.Remove(player);
            db.SaveChanges();
            return res.SuccessResponse(Messages.Player.DELETED, player);
        }
    }

}