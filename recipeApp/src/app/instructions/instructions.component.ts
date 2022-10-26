import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.component';

export class Instruction {
  constructor(
    public id: number,
    public instruction: string,
    public recipes: Recipe[]
  ){

  }
}

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
