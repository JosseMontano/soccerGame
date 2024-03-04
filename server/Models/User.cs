using System;
using System.Collections.Generic;

namespace server.Models;

public partial class User
{
    public int Id { get; set; }

    public string Gmail { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Estado { get; set; } = null!;

    public int? IdUsrCreacion { get; set; }

    public int? IdUsrModificacion { get; set; }

    public DateTime FechaModificacion { get; set; }

    public DateTime FechaCreacion { get; set; }
}
