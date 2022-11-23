import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:57089/api";


  constructor(private http: HttpClient) { }

  getAnunciosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/anuncios');
  }

  addAnuncio(val:any){
    return this.http.post(this.APIUrl+'/anuncios',val);
  }

  updateAnuncio(val:any){
    return this.http.put(this.APIUrl+'/anuncios',val);
  }

  deleteAnuncio(val:any){
    return this.http.delete(this.APIUrl+'/anuncios/'+val);
  }

  getAllAnuncios():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/anuncios/GetAllAnuncios');
  }




  getHistorialMascotaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/HistorialMascota');
  }

  addHistorialMascota(val:any){
    return this.http.post(this.APIUrl+'/HistorialMascota',val);
  }

  updateHistorialMascota(val:any){
    return this.http.put(this.APIUrl+'/HistorialMascota',val);
  }

  deleteHistorialMascota(val:any){
    return this.http.delete(this.APIUrl+'/HistorialMascota/'+val);
  }

  getAllHistorial():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/HistorialMascota/GetAllHistorial');
  }


  getEtapasList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/etapas');
  }

  addEtapas(val:any){
    return this.http.post(this.APIUrl+'/etapas',val);
  }

  updateEtapas(val:any){
    return this.http.put(this.APIUrl+'/etapas',val);
  }

  deleteEtapas(val:any){
    return this.http.delete(this.APIUrl+'/etapas/'+val);
  }

  getAllEtapas():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/etapas/GetAllEtapas');
  }



  getMascotasList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/mascotas');
  }

  addMascotas(val:any){
    return this.http.post(this.APIUrl+'/mascotas',val);
  }

  updateMascotas(val:any){
    return this.http.put(this.APIUrl+'/mascotas',val);
  }

  deleteMascotas(val:any){
    return this.http.delete(this.APIUrl+'/mascotas/'+val);
  }

  getAllMascotas():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/mascotas/GetAllMascotas');
  }

  getUserPetNames(val:any){
    return this.http.get(this.APIUrl+'/mascotas/GetUserPetNames',val);
  }

  getPetNames(val:any){
    return this.http.get(this.APIUrl+'/mascotas/GetPetNames'+val);
  }

  getNivelList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/nivel');
  }

  addNivel(val:any){
    return this.http.post(this.APIUrl+'/nivel',val);
  }

  updateNivel(val:any){
    return this.http.put(this.APIUrl+'/nivel',val);
  }

  deleteNivel(val:any){
    return this.http.delete(this.APIUrl+'/nivel/'+val);
  }

  getAllNivel():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/nivel/GetAllNivel');
  }



  getProvinciasList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/provincias');
  }

  addProvincias(val:any){
    return this.http.post(this.APIUrl+'/provincias',val);
  }

  updateProvincias(val:any){
    return this.http.put(this.APIUrl+'/provincias',val);
  }

  deleteProvincias(val:any){
    return this.http.delete(this.APIUrl+'/provincias/'+val);
  }

  getAllProvincias():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/provincias/GetAllProvincias');
  }


  getTamañoList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tamaño');
  }

  addTamaño(val:any){
    return this.http.post(this.APIUrl+'/tamaño',val);
  }

  updateTamaño(val:any){
    return this.http.put(this.APIUrl+'/tamaño',val);
  }

  deleteTamaño(val:any){
    return this.http.delete(this.APIUrl+'/tamaño/'+val);
  }

  getAllTamaño():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/tamaño/GetAllTamaño');
  }



  getTiendasList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tiendas');
  }

  addTiendas(val:any){
    return this.http.post(this.APIUrl+'/tiendas',val);
  }

  updateTiendas(val:any){
    return this.http.put(this.APIUrl+'/tiendas',val);
  }

  deleteTiendas(val:any){
    return this.http.delete(this.APIUrl+'/tiendas/'+val);
  }

  getAllTiendas():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/tiendas/GetAllTiendas');
  }



  getTiposList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tipos');
  }

  addTipos(val:any){
    return this.http.post(this.APIUrl+'/tipos',val);
  }

  updateTipos(val:any){
    return this.http.put(this.APIUrl+'/tipos',val);
  }

  deleteTipos(val:any){
    return this.http.delete(this.APIUrl+'/tipos/'+val);
  }

  getAllTipos():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/tipos/GetAllTipos');
  }



  getUsuariosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/usuarios');
  }

  addUsuarios(val:any){
    return this.http.post(this.APIUrl+'/usuarios',val);
  }

  updateUsuarios(val:any){
    return this.http.put(this.APIUrl+'/usuarios',val);
  }

  deleteUsuarios(val:any){
    return this.http.delete(this.APIUrl+'/usuarios/'+val);
  }

  getAllUsuarios():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/usuarios/GetAllUsuarios');
  }

  getUserId(val:any){
    return this.http.get(this.APIUrl+'/usuarios/GetUserId',val);
  }

  GetId(val:any){
    return this.http.get(this.APIUrl+'/usuarios/GetId'+val);
  }



  getVeterinariosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/veterinarios');
  }

  addVeterinarios(val:any){
    return this.http.post(this.APIUrl+'/veterinarios',val);
  }

  updateVeterinarios(val:any){
    return this.http.put(this.APIUrl+'/veterinarios',val);
  }

  deleteVeterinarios(val:any){
    return this.http.delete(this.APIUrl+'/veterinarios/'+val);
  }

  getAllVeterinarios():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/veterinarios/GetAllVeterinarios');
  }



  
}
