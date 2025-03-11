import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListaComponent } from './components/lista/lista.component';
import { PostsComponent } from './components/posts/posts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ListaComponent,PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alapok';
  szoveg="Ismerkedés az Angular-al";
  szam=42;

  katt(){
    this.szam=111;
  }
}
