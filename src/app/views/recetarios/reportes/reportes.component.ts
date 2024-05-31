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
import { MedicoModel } from '../models/medico.model';
import { MedicoService } from '../services/medico.service';
@Component({
  selector: 'app-reportes',
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
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss',
})
export class ReportesComponent {
  listaMedicos: MedicoModel[] = [];
  medicoModelo: MedicoModel = new MedicoModel();

  /**
   *
   */
  constructor(private medicoService: MedicoService) {
    this.getMedicoss();
  }
  getMedicoss() {
    //console.log('id medico', valorespecialidad.value);
    this.medicoService.getTodasLosMedicosporEspecialidad().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.listaMedicos = respuesta;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  verMedico(medico: MedicoModel) {
    this.medicoModelo = medico;
  }
}
