import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent,NotesComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
