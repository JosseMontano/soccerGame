namespace server.Constants
{
    public static class Messages
    {
        public static class Auth
        {
            public static string FOUND { get; } = "Usuario obtenido correctamente";
            public static string NOTFOUND { get; } = "No se encontró el usuario";
            public static string CREATED { get; } = "Usuario registrado correctamente";
            public static string UPDATED { get; } = "Usuario actualizado exitosamente";
            public static string UPDATEDPASSWORD { get; } = "Contraseña actualizada exitosamente";
            public static string EXISTSUSERNAME { get; } = "Este nombre de usuario ya existe";
            public static string UNAUTHORIZED { get; } = "Las credenciales son inválidas";
            public static string ERRORCONFIG { get; } = "No se encontró la configuración para generar el token";
            public static string ERRORTOKEN { get; } = "Token inválido";
            public static string ERRORPASSWORDACTUAL { get; } = "La contraseña actual no coincide";
            public static string ERRORPASSWORDBODY { get; } = "Las contraseña nueva no coincide";
            public static string LOGINSUCESS { get; } = "Sesión iniciada correctamente";
        }
        
        public static class Team
        {
            public static string FOUND { get; } = "Equipo obtenido correctamente";
            public static string NOTFOUND { get; } = "No se encontró el equipo";
            public static string CREATED { get; } = "Equipo registrado correctamente";
            public static string UPDATED { get; } = "Equipo actualizado exitosamente";
            public static string DELETED { get; } = "Equipo eliminado exitosamente";
        }
    }
}