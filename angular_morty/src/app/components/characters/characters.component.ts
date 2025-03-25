import { Component, OnInit } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { CharacterComponent } from '../character/character.component';
import { Info } from '../../../types/info';
import { Character } from '../../../types/character';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgIf,NgFor,CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit  {

  ngOnInit(): void {
    this.getCharacters();
  }

  info:Info={} as Info;
  isLoading=false;
  results:Character[]=[];
  page=1;

  getCharacters(){
    this.isLoading=true;
    fetch(`https://rickandmortyapi.com/api/character?page=${this.page}`)
    .then(res=>res.json())
    .then(adat=>{
      this.info=adat.info;
      this.results=adat.results;
    })
    .catch(err=>alert(err))
    .finally(()=>this.isLoading=false);
  }

  tovabb(){
    console.log(this.page);
    if(this.page<this.info.pages){
      
      this.page+=1;
      this.getCharacters();
    }
  }

  vissza(){
    console.log(this.page);
    if(this.page>1){
      
      this.page-=1;
      this.getCharacters();
    }

  }

}
