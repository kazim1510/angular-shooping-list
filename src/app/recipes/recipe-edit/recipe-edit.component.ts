import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private rsService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let desc = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.rsService.getSelectedRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      desc = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,
                [Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
          );
        }
      }

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(desc, Validators.required),
      'ingredients': recipeIngredients
    });

  }

  onSubmit() {
    if (this.editMode) {
      this.rsService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.rsService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
