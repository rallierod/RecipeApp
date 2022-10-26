import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredients/ingredients.component';
import { Instruction } from '../instructions/instructions.component';

export class Recipe {
  constructor(
    public id: number,
    public name: string, 
    public ingredients: Ingredient[],
    public instructions: Instruction[],
    public link: string) {

    }
  
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [];
  closeResult: string | undefined;
  deleteId: number = 0;
  idDisplay: number = 0;
  recipeNameDisplay: string | undefined;
  ingredientDisplay: Ingredient[] = [];
  instructionDisplay: Instruction[] = [];

  addList: string[] =[];

  constructor(private httpClient: HttpClient,) { }




  ngOnInit(): void {
  }

}
