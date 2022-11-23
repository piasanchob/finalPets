using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace petsNETV1.Models
{
    public class HistorialMascota
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string peso { get; set; }
        public string raza { get; set; }
        public string edad { get; set; }
        public string vacunas { get; set; }
        public int observaciones { get; set; }
        public string proxima_cita { get; set; }
        public int usuario_id { get; set; }
    }
}