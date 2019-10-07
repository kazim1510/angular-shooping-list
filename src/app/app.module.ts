import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipesDetailsComponent} from './recipes/recipes-details/recipes-details.component';
import {RecipesItemComponent} from './recipes/recipes-list/recipes-item/recipes-item.component';
import {ShoppingEditComponent} from './shopping/shopping-edit/shopping-edit.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BasicTestComponent} from './basic-test/basic-test.component';
import {BasicDirective} from './basic-test/basic-test.directive';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingService} from './shopping/shopping.service';
import {AppRoutingModule} from './app-routing-module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {RecipeService} from "./recipes/recipe.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingEditComponent,
    RecipesListComponent,
    BasicTestComponent,
    BasicDirective,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
