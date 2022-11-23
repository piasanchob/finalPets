using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace petsNETV1.Models
{
    public class Veterinarios
    {
        public int id { get; set; }
        public string nombre { get; set; } 
        public string descripcion { get; set; } 
        public string ubiexacta { get; set; } 
        public string numero { get; set; } 
        public string ubicacion { get; set; }
        public int nota { get; set; }
        public string horario { get; set; }
        public string especialidad { get; set; } 
    }
}