import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  users: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.restProvider.getMusic()
      .subscribe(musicList => console.log(musicList));
  }

  // getUsers() {
  //   this.restProvider.getUsers()
  //   .then(data => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }

}
