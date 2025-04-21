import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../../services/notes/notes.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteCardComponent, ReactiveFormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  editForm!: FormGroup;
  noteToEdit: Note | null = null;
  editMode = false;

  constructor(private notesService: NotesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      body: ['']
    });
  
    this.notesService.getNotes().subscribe((res) => {
      this.notes = res;
    });
  }
  

  onEdit(note: Note) {
    console.log('Editing Note:', note); // Check if this fires
    this.editMode = true;
    this.noteToEdit = note;
    this.editForm.setValue({
      id: note.id,
      title: note.title,
      description: note.description,
      body: note.body
    });
  }
  

  updateNote() {
    if (this.editForm.valid && this.noteToEdit) {
      const updatedNote = this.editForm.value;
      this.notesService.updateNote(updatedNote.id, updatedNote).subscribe(() => {
        this.editMode = false;
        this.noteToEdit = null;
        this.notes = this.notes.map(note => 
          note.id === updatedNote.id ? updatedNote : note
        );
      });
    }
  }
  

  onNoteDelete(noteId: number) {
    this.notesService.deleteNote(noteId).subscribe(() => {
      this.notes = this.notes.filter(n => n.id !== noteId); // Remove from view
    });
  }
}
