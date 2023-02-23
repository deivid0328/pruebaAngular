import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
@ViewChild('miFormulario')  miFormulario!:NgForm

precio:boolean=false;

nombreValido():boolean{

  return (this.miFormulario?.form.controls['producto']?.invalid  && 
          this.miFormulario?.form.controls['producto']?.touched

  )
        }


precioValido():boolean{
  if(this.miFormulario.value.precio.length == 0){
    return false
  }else{
    return false
  }
}

  guardar(){
      console.log(this.miFormulario.value.precio)
  }




}
