import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {NgModule} from '@angular/core';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipesDetailsComponent} from './recipes/recipes-details/recipes-details.component';
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipesDetailsComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ]
  },
  {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
