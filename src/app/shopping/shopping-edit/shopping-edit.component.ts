import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;


  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
  }

  addIngredient() {
    this.shoppingService.addIngredientEvent.emit(
      new IngredientModel(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }

}
