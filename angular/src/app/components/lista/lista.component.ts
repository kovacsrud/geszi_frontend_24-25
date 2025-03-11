import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [NgFor,NgIf],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  nevek=["Ella","Ubul","Elek","Mátyás","Éva","Ágnes"];
  //nevek=[];
  nevHozzaad(e:any){
    e.preventDefault();
    this.nevek.push(e.target.elements.nev.value);
  }
  nevTorles(i:number){
    this.nevek.splice(i,1);
  }

}
