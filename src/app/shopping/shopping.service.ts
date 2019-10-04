import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingService {

  ingredientChanged = new EventEmitter<IngredientModel[]>();

  public ingredients: IngredientModel[] = [
    new IngredientModel('apples', 5),
    new IngredientModel('bananas', 5)
  ];

  public addIngredientEvent = new EventEmitter<IngredientModel>();

  public getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    //  this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
