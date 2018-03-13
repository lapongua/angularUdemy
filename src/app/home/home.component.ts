 import  { Component } from '@angular/core';
 import {RopaService} from '../services/ropa.service';

 @Component({
   selector: 'home',
   templateUrl: './home.component.html',
   providers: [RopaService]
 })


export class HomeComponent{
  public titulo= "Página principal de mi aplicación";
  public listado_ropa:Array<string>;
  public prenda_nueva:string;
  public fecha;

  constructor(
    private _ropaService: RopaService
    ){
    this.fecha= new Date(2018,2,12);
  }

  ngOnInit(){
    this.listado_ropa=this._ropaService.getRopa();
    console.log(this.listado_ropa);
    //console.log(this._ropaService.prueba('camiseta azul'));
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_nueva);
    this.prenda_nueva= null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }
}