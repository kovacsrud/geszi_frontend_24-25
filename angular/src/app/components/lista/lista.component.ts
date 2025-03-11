import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  nevek=["Ella","Ubul","Elek","Mátyás","Éva","Ágnes"];

}
