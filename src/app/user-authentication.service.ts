import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/observable";
import { Url } from 'url';

@Injectable()
export class UserAuthenticationService {

  user:userDetails = {
    username:"",
    isLoggedIn : false,
    uniqueId: "dump",
    profilePic: ""
  }

  database:any;
  items:Observable<any[]>;
  userCollection : AngularFirestoreCollection<any>;

  constructor(public afAuth: AngularFireAuth, db:AngularFirestore) {
    this.items = db.collection('test').valueChanges();
    this.database = db.collection("allUser");
    this.userCollection = db.collection<any>('userCollection');
  }

  login(){
    var local = this;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        local.user.username = user.displayName;
        local.user.isLoggedIn = true;
        local.user.uniqueId = user.displayName.substring(0,5);
        local.user.profilePic = user.photoURL;
        console.log(user.photoURL);
        local.userCollection.add({
          uniqueId: local.user.uniqueId,
          username: user.displayName
        });
      }
      else{    
        local.user.username = "";
        local.user.isLoggedIn = false;
      }
    });    
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  getUserDetails(){
    return this.user;
  }

}

export interface userDetails{
  username: string,
  isLoggedIn: Boolean,
  uniqueId: String,
  profilePic: any
}
