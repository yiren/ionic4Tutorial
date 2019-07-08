import { Component, OnInit } from '@angular/core';
import { Recipe } from './model/recipe';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipesService) { }


  ionViewWillEnter() {
    console.log('Will Enter');
  }

  ionViewDidEnter() {
    console.log('Did Enter');
  }

  ionViewWillLeave() {
    console.log('Will Leave');
  }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
