import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'Conversor'})

export class ConversorPipe implements PipeTransform{
  transform(value, value2){
    let numero_uno=parseInt(value);
    let numero_dos=parseInt(value2);

    let result="La multiplicación de "+numero_uno+" x "+numero_dos+" = "+(numero_uno*numero_dos);
    return result;
  }
}