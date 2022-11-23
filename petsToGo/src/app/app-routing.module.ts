import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptarComponent } from './components/adoptar/adoptar.component';
import { AgregarMascotaComponent } from './components/agregar-mascota/agregar-mascota.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ChatsComponent } from './components/chats/chats.component';
import { DescMascotaComponent } from './components/desc-mascota/desc-mascota.component';
import { FirstComponent } from './components/first/first.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MisMascotasComponent } from './components/mis-mascotas/mis-mascotas.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { VetInfoComponent } from './components/vet-info/vet-info.component';
import { VeterinariosComponent } from './components/veterinarios/veterinarios.component';

const routes: Routes = [{path: "first", component: FirstComponent},
                        {path: "register", component: RegisterComponent},
                        {path: "login", component: LoginComponent},
                        {path: "home", component: HomeComponent},
                        {path: "adoptar", component: AdoptarComponent},
                        {path: "desc_mascota", component: DescMascotaComponent},
                        {path: "veterinarios", component: VeterinariosComponent},
                        {path: "tiendas", component: TiendasComponent},
                        {path: "anuncios", component: AnunciosComponent},
                        {path: "chats", component: ChatsComponent},
                        {path: "mis_mascotas", component: MisMascotasComponent},
                        {path: "profile", component: ProfileComponent},
                        {path: "historial", component: HistorialComponent},
                        {path: "agregar_mascota", component: AgregarMascotaComponent},
                        {path: "catalogo", component: CatalogoComponent},
                        {path: "vet_info", component: VetInfoComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
