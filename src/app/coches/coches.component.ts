import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.services';


@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})

export class CochesComponent{

  public coche: Coche;
  public coches:Array<Coche>;
  public articulos;

  constructor(
    private _peticionesService: PeticionesService;
    ){
    this.coche= new Coche("","","");
    this.coches= [
      new Coche("Renault clio","110","azul"),
      new Coche("Lexus nx 300","195","rojo"),
      new Coche("Audi Q5","145","verde")
    ];
  }

  ngOnInit(){
    this._peticionesService.getArticulos().subscribe(
        result =>{
          this.articulos=result;
          if(!this.articulos){
            console.log("Error en el servidor");
          }
        },
        error =>{
          var errorMessage = <any>error;
          console.log(errorMessage);
        }
      );
  }

  onSubmit(){
    //console.log(this.coche);
    this.coches.push(this.coche);
    this.coche=new Coche("","","");

  }

}