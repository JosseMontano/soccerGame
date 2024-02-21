using Microsoft.EntityFrameworkCore;

namespace server.Data
{
    public class DBContext : DbContext
    {
        private readonly IHttpContextAccessor contextAccessor;
        public DBContext(DbContextOptions<DBContext> options, IHttpContextAccessor _contextAccessor) : base(options)
        {
            contextAccessor = _contextAccessor;
        }


    }
}