
import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1','This is simply a test 1','https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg',
    [new Ingredient('Meat',1), new Ingredient('Fries', 2)]),
    new Recipe('A Test Recipe 2','This is simply a test 2','https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg',
    [new Ingredient('Eggs',1), new Ingredient('Bacon', 2)])

  ];

  getRecipes() {
      return this.recipes.slice();
  }

}