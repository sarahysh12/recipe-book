
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    ingredientsChanged =  new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addItem(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ings: Ingredient[]) {
        this.ingredients.push(...ings);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


}