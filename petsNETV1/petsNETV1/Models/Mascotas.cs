using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace petsNETV1.Models
{
    public class Mascotas
    {
        public int id { get; set; }
        public string nombre { get; set; } 
        public string tamaño { get; set; } 
        public string tipo_id { get; set; } 
        public string edad { get; set; } 
        public string descripción { get; set; } 
        public string raza { get; set; } 
        public string peso { get; set; } 
        public int usuario_id { get; set; }

    }
}