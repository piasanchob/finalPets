using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using petsNETV1.Models;

namespace petsNETV1.Controllers
{
    public class HistorialMascotaController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"SELECT nombre,peso,raza,edad,vacunas,observaciones,proxima_cita, usuario_id FROM HistorialMascota ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["PetsToGoAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);




        }

        public string Post(HistorialMascota historial)
        {
            try
            {
                string query = @"INSERT INTO HistorialMascota(nombre,peso,raza,edad,vacunas,observaciones,proxima_cita) VALUES
                (

                '" + historial.nombre + @"'
                ,'" + historial.peso + @"'
                ,'" + historial.raza + @"'
                ,'" + historial.edad + @"'
                ,'" + historial.vacunas + @"'
                ,'" + historial.observaciones + @"'
                ,'" + historial.proxima_cita + @"'
              
            
                )";




                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["PetsToGoAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Añadido Exitosamente";

            }
            catch (Exception)
            {
                return "Error";
            }
        }

        public string Put(HistorialMascota historial)
        {
            try
            {
                string query = @"UPDATE HistorialMascota SET 
                
                nombre = '" + historial.nombre + @"',
                peso  =
                '" + historial.peso + @"'
                ,raza  =
                '" + historial.raza + @"'
                ,edad  =
                '" + historial.edad + @"'
                ,vacunas  =
                '" + historial.vacunas + @"'
                ,observaciones  =
                '" + historial.observaciones + @"'
                ,proxima_cita  =
                '" + historial.proxima_cita + @"'
             
             

               

                WHERE nombre = '" + historial.nombre + @"'
                ";


                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["PetsToGoAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Actualizado Exitosamente";

            }
            catch (Exception)
            {
                return "Error al actualizar mascota";
            }
        }

        public string Delete(string nombre)
        {
            try
            {
                string query = @"DELETE FROM HistorialMascota WHERE nombre = " + nombre + @"
                ";


                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["PetsToGoAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Eliminado Exitosamente";

            }
            catch (Exception)
            {
                return "Error";
            }
        }

        [Route("api/historialmascota/GetAllHistorial")]
        [HttpGet]
        public HttpResponseMessage GetAllHistorial(string nombre)
        {

            string query = @"SELECT nombre,peso,raza,edad,vacunas,observaciones,proxima_cita,usuario_id FROM HistorialMascota WHERE nombre = " + nombre + @"
                "; 

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["PetsToGoAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

    }
}
