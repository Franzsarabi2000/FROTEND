import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  RowComponent,
  TableActiveDirective,
  TableColorDirective,
  TableDirective,
  TextColorDirective,
} from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { from } from 'rxjs';
import { MedicoModel } from '../models/medico.model';
import { MedicoService } from '../services/medico.service';
@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormSelectDirective,
    FormControlDirective,
    FormLabelDirective,
    ButtonDirective,
    NgStyle,
    TextColorDirective,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
  ],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss',
})
export class RecetaComponent {
  listaMedicos: MedicoModel[] = [];
  medicoModelo: MedicoModel = new MedicoModel();
  /**
   *
   */
  constructor(private medicoService: MedicoService) {
    this.getMedicos();
  }

  getMedicos() {
    this.medicoService.getTodasLosMedicos().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.listaMedicos = respuesta;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  guardarMedico() {
    console.log(this.medicoModelo);
    if (this.medicoModelo._id == '') {
      console.log('Guardar', this.medicoModelo);
      this.agregarMedico();
    } else {
      console.log('editar', this.medicoModelo);
      this.editarMedico();
    }
  }
  agregarMedico() {
    this.medicoService.agregarMedico(this.medicoModelo).subscribe({
      next: (respuesta) => {
        console.log('Se guardo exitosamente', respuesta);
        this.getMedicos(); //actualizar datos
        this.medicoModelo = new MedicoModel(); //limpia formulario
        //this.listaMedicos = respuesta;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  eliminarMedico(medico: MedicoModel) {
    console.log('item para eliminar medico', medico);
    this.medicoService.eliminarmedico(medico._id).subscribe({
      next: (respuesta) => {
        console.log('Se elimino exitosamente', respuesta);
        this.getMedicos(); //actualizar datos
        // this.medicoModelo = new MedicoModel(); //limpia formulario
        //this.listaMedicos = respuesta;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  verMedico(medico: MedicoModel) {
    this.medicoModelo = medico;
  }
  editarMedico() {
    //this.medicoModelo = medico;
    //console.log('medico a editar', medico);
    this.medicoService.editarMedico(this.medicoModelo).subscribe({
      next: (respuesta) => {
        console.log('Se edito exitosamente', respuesta);
        this.getMedicos(); //actualizar datos
        this.medicoModelo = new MedicoModel(); //limpia formulario
        //this.listaMedicos = respuesta;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
