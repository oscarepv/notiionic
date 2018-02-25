import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class NotesServices{
  constructor( public afDB: AngularFireDatabase) {

  }
  /*notes = [
    {
      id: '1',
      title: 'nota1',
      description: 'descripcion 1'
    },
    {
      id: '2',
      title: 'nota2',
      description: 'descripcion 2'
    }
  ];*/
  public getNotes(){
    return this.afDB.list('notas/').valueChanges();
    //return this.notes;
  }
  public getNote(id: any){
    return this.afDB.object('notas/'+id).valueChanges();
    /*return this.notes.filter(function(e,i){return e.id == id})[0] || {
      id: '',
      title: '',
      description: ''
    };*/
  }
  public createNote(note){
    //this.notes.push(note);
    this.afDB.database.ref('notas/'+note.id).set(note);
  }

  public editNote(note){
    this.afDB.database.ref('notas/'+note.id).set(note);
    /*for(let i=0; i< this.notes.length;i++){
      if(this.notes[i].id == note.id){
        this.notes[i] = note;
      }
    }*/
  }
  public deleteNote(note){
    this.afDB.database.ref('notas/'+note.id).remove();
   /* for(let i = 0; i< this.notes.length;i++){
      if(this.notes[i].id == note.id){
        this.notes.splice(i,1);
      }
    }*/
  }
}
