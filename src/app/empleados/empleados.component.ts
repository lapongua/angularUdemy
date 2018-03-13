import { Component } from '@angular/core';
import { Empleados } from './empleados';


@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  public titulo="Listado de empleados";
  public empleado:Empleados;
  public trabajadores:Array<Empleados>;
  public externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
  	  	this.empleado=new Empleados('Lara',33,'webdeveloper',true); //nueva instancia
  	  	this.trabajadores=[
  	  		new Empleados('Michel',52,'cordinator',true),
  	  		new Empleados('Sergio',29,'backend',true),
  	  		new Empleados('Fran',27,'nodeDeveloper',false)
  	  	];

  	  	this.externo=false;
  	  	this.color='blue';
        this.color_seleccionado='#CCC';
  }
  ngOnInit(){
  	// console.log(this.empleado);

  }

  cambiarExterno(valor){
  	this.externo=valor;
  }


}
