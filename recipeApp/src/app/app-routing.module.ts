import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewRecipeComponent } from './add-new-recipe/add-new-recipe.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-new-recipe', component: AddNewRecipeComponent},
  {path: 'practice', component: PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
