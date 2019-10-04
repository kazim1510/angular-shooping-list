import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingService} from './shopping.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  // styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.ingredients;
    this.shoppingService.addIngredientEvent.subscribe(
      (ingredient: IngredientModel) => {
        this.shoppingService.addIngredient(ingredient);
      }
    );
    this.shoppingService.ingredientChanged.subscribe(
      (ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
