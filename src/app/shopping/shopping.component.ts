import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingService} from './shopping.service';
import {Subject, Subscription} from "rxjs/index";


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  // styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  private igChangedSub: Subscription


  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.ingredients;
    // this.shoppingService.addIngredientEvent.subscribe(
    //   (ingredient: IngredientModel) => {
    //     this.shoppingService.addIngredient(ingredient);
    //   }
    // );
    this.igChangedSub = this.shoppingService.ingredientChanged.subscribe(
      (ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
      }
    );
  }


  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingService.itemEdit.next(index);
  }
}
