import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subsc: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: IngredientModel;

  @ViewChild('f', {static: false}) slForm: NgForm;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.subsc = this.shoppingService.itemEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editItem = this.shoppingService
          .getIngredient(this.editedItemIndex);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  deleteIngredient() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    if (!this.editMode) {
      this.shoppingService.addIngredient(newIngredient);
    } else {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    this.editMode = false;
    form.reset();
  }


  ngOnDestroy(): void {
    this.subsc.unsubscribe();
  }
}
