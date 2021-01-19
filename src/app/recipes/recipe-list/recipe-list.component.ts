import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://dcom-prod.imgix.net/files/wp-content/uploads/2014/07/1464651377-frango_marinado_ao_buttermilk_616x462.png')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
