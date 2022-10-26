import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewRecipeComponent } from './add-new-recipe/add-new-recipe.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { PracticeComponent } from './practice/practice.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-new-recipe', component: AddNewRecipeComponent},
  {path: 'practice', component: PracticeComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'ingredients', component: IngredientsComponent},
  {path: 'instructions', component: InstructionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
