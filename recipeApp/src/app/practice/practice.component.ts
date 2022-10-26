import { Component, OnInit } from '@angular/core';
import { AddNewRecipeComponent } from '../add-new-recipe/add-new-recipe.component';
import { Recipe } from '../recipe/recipe.component';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  closeResult: string | undefined;
  recipeName: Recipe | undefined;






  constructor() { }

  ngOnInit(): void {
  }

}
