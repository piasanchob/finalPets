using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace petsNETV1.Models
{
    public class Anuncios
    {
        public int id { get; set; }
        public string nombre { get; set; } 
        public string tamaño_id { get; set; } 
        public string tipo_id { get; set; } 
        public string provincia_id { get; set; }
        public string nivel_id { get; set; } 
        public string etapa_id { get; set; } 
        public int usuario_id { get; set; }
        public string descripcion { get; set; } 
        public string correo { get; set; }
        public string tel { get; set; } 
    }
}