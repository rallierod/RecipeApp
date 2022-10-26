import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.component';
export class Ingredient {
  constructor(
    public id: number,
    public amount: number,
    public unit: string,
    public ingredient: string,
    public recipes: Recipe[]
  ){

  }
}

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
