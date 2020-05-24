import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {

  medicos: any[]= []

  constructor(public _medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  saludarMedico(name: string){
    return `Hola ${name}!`
  }

  obtenerMedicos(){
    this._medicoService.getMedicos()
      .subscribe( (medics: any[]) => this.medicos = medics);
  }

}
