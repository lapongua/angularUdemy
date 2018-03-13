import{ ModuleWithProviders} from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';

//Importar componentes
import{EmpleadosComponent} from './empleados/empleados.component';
import{FrutaComponent} from './fruta/fruta.component';
import{HomeComponent} from './home/home.component';
import{ContactoComponent} from './contacto/contacto.component';
import{CochesComponent} from './coches/coches.component';
import{PlantillasComponent} from './plantillas/plantillas.component';


//Definir variables
const appRoutes: Routes=[
{path:'home', component:HomeComponent}, //home
{path:'empleado',component:EmpleadosComponent},
{path:'fruta',component:FrutaComponent},
{path:'contacto', component:ContactoComponent},
{path:'contacto/:page', component:ContactoComponent},
{path:'coches', component:CochesComponent},
{path:'plantillas', component:PlantillasComponent},
{path:'**', component:HomeComponent} //error

];

export const appRountingProviders: any[]=[];
export const rounting: ModuleWithProviders= RouterModule.forRoot(appRoutes);