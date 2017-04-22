import { NgModule } from '@angular/core';
import { FirebaseModule } from './firebase/firebase.module';
import { NotFoundComponent } from "./errors/404/not-found.component";
import {routing} from './general.router';

@NgModule({
  imports: [
    FirebaseModule,
    routing
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class GeneralModule {}
