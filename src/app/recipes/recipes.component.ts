import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipes.component.html',
  // styleUrls: ['./recipe.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }
}
