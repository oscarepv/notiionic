import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NotesServices} from '../../services/notes.services';
import { DetailPage } from '../../pages/detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  constructor(public navCtrl: NavController, public noteService: NotesServices) {
    this.notes = this.noteService.getNotes();
  }
  public goToDetail(note: any){
    this.navCtrl.push(DetailPage, {id: note});
  }
  crearNota(){
    this.navCtrl.push(DetailPage, {id: 0});
  }
}
