import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../../services/notes/notes.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
 noteForm!: FormGroup;

  constructor(private fb: FormBuilder, private notesService: NotesService,private http:HttpClient) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.noteForm.valid) {
      const newNote = this.noteForm.value as Note;
      this.notesService.addNote(newNote).subscribe({
        next: (response) => {
          console.log('Note added:', response);
          alert('Note added successfully!');
          this.noteForm.reset();
          window.location.reload(); // optional
        },
        error: (err) => {
          console.error('Error adding note:', err);
        }
      });
    }
  }
  
}
