import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input() note: any;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<any>();

  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  editNote() {
    this.onEdit.emit(this.note); // ✅ emits note data
  }
  

  deleteNote() {
    if (this.note?.id !== undefined) {
      this.onDelete.emit(this.note.id);
    }
  }
  
}
