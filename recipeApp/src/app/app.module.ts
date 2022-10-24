import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Website Components
import { HomeComponent } from './home/home.component';
import { AddNewRecipeComponent } from './add-new-recipe/add-new-recipe.component';
import { ListComponent } from './list/list.component';
//Angular Material Components
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { PracticeComponent } from './practice/practice.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNewRecipeComponent,
    ListComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
