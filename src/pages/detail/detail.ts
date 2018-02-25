import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesServices} from '../../services/notes.services';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note: any = {description: null, id: null, title: null };
  id= null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesServices) {
    this.id = this.navParams.get('id');

    if(this.id !== 0){
      this.notesService.getNote(this.id).subscribe(
        notes => {
          this.note = notes;
        //  console.log('llego');
          //console.log(this.note.title);
        }
      );
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
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      this.navCtrl.pop();
    }

  }
  deleteNote(){
    this.notesService.deleteNote(this.note);
    this.navCtrl.push(HomePage);
  }
}
