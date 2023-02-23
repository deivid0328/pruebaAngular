import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})

export class BasicosComponent  {


  // miFormulario: FormGroup = new FormGroup({
    //   nombre      : new FormControl('RTX 4080Ti'),
    //   precio      : new FormControl(1500),
    //   existencias : new FormControl(5)
    // })

miFormulario:FormGroup = this.fb.group({
  nombre: [, [Validators.required, Validators.minLength(3)] ],
  precio: [ , [Validators.min(0), Validators.required]],
  existencias: [ , [Validators.required, Validators.min(0)] ]
})




  constructor(  private  fb:FormBuilder ) { 

  }
  campoEsValido( campo: string ) {
    return this.miFormulario.get(campo)?.errors
            && this.miFormulario.get(campo)?.touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }



}

