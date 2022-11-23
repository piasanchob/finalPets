using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace petsNETV1.Models
{
    public class Usuarios
    {
        public int id { get; set; }
        public string nombre { get; set; } 
        public string cedula { get; set; } 
        public string correo { get; set; } 
        public string fechanac { get; set; } 
        public string usuario { get; set; } 
        public string contraseña { get; set; } 
    }
}