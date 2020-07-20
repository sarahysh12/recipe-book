
import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1','This is simply a test 1','https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg',
    [new Ingredient('Meat',1), new Ingredient('Fries', 2)]),
    new Recipe('A Test Recipe 2','This is simply a test 2','https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg',
    [new Ingredient('Eggs',1), new Ingredient('Bacon', 2)])

  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
      return this.recipes.slice();
  }


  addIngredientsToShoppingList(ings: Ingredient[]) {
    this.slService.addIngredients(ings);
  }

}