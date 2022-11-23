import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { AlertModule } from '@coreui/angular';
import { HeaderModule, GridModule, NavModule, DropdownModule, CardModule, ButtonModule, ImgModule, FooterModule, FormModule, SidebarModule, PaginationModule, PopoverModule, CarouselModule} from '@coreui/angular';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdoptarComponent } from './components/adoptar/adoptar.component';
import { DescMascotaComponent } from './components/desc-mascota/desc-mascota.component';
import { VeterinariosComponent } from './components/veterinarios/veterinarios.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { ChatsComponent } from './components/chats/chats.component';
import { MisMascotasComponent } from './components/mis-mascotas/mis-mascotas.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistorialComponent } from './components/historial/historial.component';
import { AgregarMascotaComponent } from './components/agregar-mascota/agregar-mascota.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { VetInfoComponent } from './components/vet-info/vet-info.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdoptarComponent,
    DescMascotaComponent,
    VeterinariosComponent,
    TiendasComponent,
    AnunciosComponent,
    ChatsComponent,
    MisMascotasComponent,
    ProfileComponent,
    HistorialComponent,
    AgregarMascotaComponent,
    CatalogoComponent,
    VetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    HeaderModule,
    GridModule, 
    NavModule, 
    DropdownModule,
    CardModule,
    ButtonModule,
    ImgModule,
    FooterModule,
    NgbModule,
    FormsModule,
    FormModule,
    SidebarModule,
    BrowserAnimationsModule,
    PaginationModule,
    PopoverModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
