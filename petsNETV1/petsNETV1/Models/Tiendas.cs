using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace petsNETV1.Models
{
    public class Tiendas
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string producto { get; set; } 
        public string ubicacion { get; set; }
        public string horario { get; set; } 
        public string tel { get; set; } 
    }
}