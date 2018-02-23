import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesServices} from '../../services/notes.services';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note = {
    id: '',
    title: '',
    description: ''
  };
  id= null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesServices) {
    this.id = this.navParams.get('id');
    if(this.id !== 0){
      this.note = notesService.getNote(this.id);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  addNote(){
    if(this.id !== 0){
      this.notesService.editNote(this.note);
      this.navCtrl.pop();
    } else {
      //this.note.id = Date.now();
      this.notesService.createNote(this.note);
      this.navCtrl.pop();
    }

  }
  deleteNote(){
    this.notesService.deleteNote(this.note);
    this.navCtrl.pop();
  }
}
