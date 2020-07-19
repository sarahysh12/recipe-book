import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1','This is simply a test 1','https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg'),
    new Recipe('A Test Recipe 2','This is simply a test 2','https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected (recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
