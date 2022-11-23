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
    public class UsuariosController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"SELECT nombre,cedula,correo,fechanac,usuario,contraseña FROM Usuarios";
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

        public string Post(Usuarios usuario)
        {
            try
            {
                string query = @"INSERT INTO Usuarios VALUES
                (

                '" + usuario.nombre + @"'
                ,'" + usuario.cedula + @"'
                ,'" + usuario.correo + @"'
                ,'" + usuario.fechanac + @"'
                ,'" + usuario.usuario + @"'
                ,'" + usuario.contraseña + @"'
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

        public string Put(Usuarios usuario)
        {
            try
            {
                string query = @"UPDATE Usuarios SET 
                
                nombre  =
                '" + usuario.nombre + @"' 
                ,cedula  =
                '" + usuario.cedula + @"'
                ,correo  =
                '" + usuario.correo + @"'
                ,fechanac  =
                '" + usuario.fechanac + @"'
                ,usuario  =
                '" + usuario.usuario + @"'
                ,contraseña  =
                '" + usuario.contraseña + @"'
               

                WHERE nombre = '" + usuario.nombre + @"'
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

                return "Usuario Actualizado Exitosamente";

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
                string query = @"DELETE FROM Usuarios WHERE id = " + id + @"
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

        [Route("api/usuarios/GetId")]
        [HttpGet]
        public string GetId(string username)
        {
            try
            {
                string query = @"SELECT id FROM Usuarios WHERE usuario = '" + username + @"' ";


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

        [Route("api/usuarios/GetAllUsuarios")]
        [HttpGet]
        public HttpResponseMessage GetAllUsuarios()
        {

            string query = @"SELECT nombre FROM Usuarios ";

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

        [Route("api/usuarios/GetUserId")]
        [HttpGet]
        public HttpResponseMessage GetUserId(string username)
        {

            string query = @"SELECT id FROM Usuarios WHERE usuario = '" + username + @"' ";

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
