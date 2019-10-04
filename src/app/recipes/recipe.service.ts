import {Recipe} from './recipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping/shopping.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is test', 'http://25.media.tumblr.com/tumblr_lhuw43ZC5q1qen36xo1_500.jpg', [
      new IngredientModel('Meat', 1),
      new IngredientModel('fries', 5)
    ]),
    new Recipe('Another test recipe', 'this is test', 'http://25.media.tumblr.com/tumblr_lhuw43ZC5q1qen36xo1_500.jpg', [
      new IngredientModel('bread', 1),
      new IngredientModel('tomatoes', 5)
    ])
  ];
  public recipeSelected = new EventEmitter<Recipe>();


  constructor(private slService: ShoppingService) {
  }


  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);
  }

  getSelectedRecipe(id: number) {
    return this.recipes[id];
  }

}
