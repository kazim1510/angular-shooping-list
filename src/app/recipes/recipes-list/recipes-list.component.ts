import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;


  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
