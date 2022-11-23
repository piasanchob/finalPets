using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using petsNETV1.Models;

using System.Web.Http;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;

namespace petsNETV1.Controllers
{
    public class VeterinariosController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"SELECT nombre,descripcion,ubiexacta,numero,ubicacion,nota,horario,especialidad FROM Veterinarios";
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

        public string Post(Veterinarios vet)
        {
            try
            {
                string query = @"INSERT INTO Veterinarios VALUES
                (

                '" + vet.nombre + @"'
                ,'" + vet.descripcion + @"'
                ,'" + vet.ubiexacta + @"'
                ,'" + vet.numero + @"'
                ,'" + vet.ubicacion + @"'
                ,'" + vet.nota + @"'
                ,'" + vet.horario + @"'
                ,'" + vet.especialidad + @"'
            
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

        public string Put(Veterinarios vet)
        {
            try
            {
                string query = @"UPDATE Veterinarios SET 
                
                nombre  =
                '" + vet.nombre + @"' 
                ,descripcion  =
                '" + vet.descripcion + @"'
                ,ubiexacta  =
                '" + vet.ubiexacta + @"'
                ,numero  =
                '" + vet.numero + @"'
                ,ubicacion  =
                '" + vet.ubicacion + @"'
                ,nota  =
                '" + vet.nota + @"'
                ,horario  =
                '" + vet.horario + @"'
                ,especialidad  =
                '" + vet.especialidad + @"'
             

               

                WHERE id = '" + vet.id + @"'
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

                return "Actualizado Exitosamente";

            }
            catch (Exception)
            {
                return "Error";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"DELETE FROM Veterinarios WHERE id = " + id + @"
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

        [Route("api/veterinarios/GetAllVeterinarios")]
        [HttpGet]
        public HttpResponseMessage GetAllVeterinarios()
        {

            string query = @"SELECT nombre FROM Veterinarios ";

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
