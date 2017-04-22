import {NgModule} from "@angular/core";
import {AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";
import {AuthService} from "./services/auth.service";
import {QuizService} from "./services/quiz.service";

const myFirebaseConfig = {
  apiKey: "AIzaSyCpB9v4KCqezTbJv1GGYSy-NVh5m8PeTbU",
  authDomain: "openquiz-a9e8d.firebaseapp.com",
  databaseURL: "https://openquiz-a9e8d.firebaseio.com",
  projectId: "openquiz-a9e8d",
  storageBucket: "openquiz-a9e8d.appspot.com",
  messagingSenderId: "982016831094"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    AuthService,
    QuizService
  ]
})
export class FirebaseModule {

}
