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
    public class MascotasController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"SELECT nombre,tamaño,tipo_id,edad,descripción,raza,peso,usuario_id FROM Mascotas";
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

        public string Post(Mascotas mascota)
        {
            try
            {
                string query = @"INSERT INTO Mascotas VALUES
                (

                '" + mascota.nombre + @"'
                ,'" + mascota.tamaño + @"'
                ,'" + mascota.tipo_id + @"'
                ,'" + mascota.edad + @"'
                ,'" + mascota.descripción + @"'
                ,'" + mascota.raza + @"'
                ,'" + mascota.peso + @"'
                ,'" + mascota.usuario_id + @"'
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

        public string Put(Mascotas mascota)
        {
            try
            {
                string query = @"UPDATE Mascotas SET 
                
                nombre  =
                '" + mascota.nombre + @"' 
                ,tamaño  =
                '" + mascota.tamaño + @"'
                ,tipo_id  =
                '" + mascota.tipo_id + @"'
                ,edad  =
                '" + mascota.edad + @"'
                ,descripción  =
                '" + mascota.descripción + @"'
                ,raza  =
                '" + mascota.raza + @"'
                ,peso  =
                '" + mascota.peso + @"'
                ,usuario_id  =
                '" + mascota.usuario_id + @"'
             

                WHERE id = '" + mascota.id + @"'
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
                string query = @"DELETE FROM Mascotas WHERE id = " + id + @"
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

        [Route("api/mascotas/GetPetNames")]
        [HttpGet]
        public string GetPetNames(int id)
        {
            try
            {
                string query = @"SELECT nombre FROM Mascotas WHERE usuario_id = '" + id + @"' ";
                


                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["PetsToGoAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return " ";

            }
            catch (Exception)
            {
                return "Error";
            }
        }

        [Route("api/mascotas/GetAllMascotas")]
        [HttpGet]
        public HttpResponseMessage GetAllMascotas()
        {

            string query = @"SELECT nombre FROM Mascotas ";

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

        [Route("api/mascotas/GetUserPetNames")]
        [HttpGet]
        public HttpResponseMessage GetUserPetNames(int id)
        {

            string query = @"SELECT nombre FROM Mascotas WHERE usuario_id = '" + id + @"' ";

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
