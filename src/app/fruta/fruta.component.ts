import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
   nombre_componente="Componente de fruta";
   listado_frutas="Manzana, pera, melon";
   public nombre:string;
   public edad:number;
   public mayorEdad:boolean;
   trabajos:Array<any>=['frontend','backend','bda',67];

   constructor(){ // Darle valor a las propiedades

		//console.log(this.trabajos);

		this.nombre="Lara Pont";
   		this.edad=33;
   		this.mayorEdad=true;

   }

   ngOnInit(){ // Primer método que se llama después del constructor (para llamar métodos)
   		// this.holaMundo(this.nombre);

   		//Variables y alcance
   		var uno=8;
   		var dos=15;

   		if(uno == 8){
   			let uno=3; // solo tiene este valor dentro de este if
   			var dos=88;

   			console.log("dentro: "+uno);
   		}

   		console.log("fuera: "+uno);
   }

   holaMundo(nombre){
   		alert(nombre);
   }


}
