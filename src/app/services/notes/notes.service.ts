import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Note {
  id?: number;
  title: string;
  description: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private apiUrl = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) {}

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }

  // Optional: fetch all notes
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }
  updateNote(id: number, updatedNote: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${id}`, updatedNote);
  }
  
  
  deleteNote(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  

}
