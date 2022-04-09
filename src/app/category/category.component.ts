import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public categoryService: CategoryService,) { }

  ngOnInit(): void {
    this.getCategoryData();
  }

  objectCat?:Category[];
  ca: Category=  { id: 0, name: ''}

  getCategoryData():void{
    this.categoryService.getCategory();
    let aux = localStorage.getItem('categoryList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objectCat=auxTxt;
  }

  postCategory(object:Category): void {
    this.categoryService.postCategory(object);
    let aux = localStorage.getItem('postedCategory'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.ca=auxTxt;
  }

  putCategory(object:Category): void {
    this.categoryService.putCategory(object);
    let aux = localStorage.getItem('updatedCategory'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.ca=auxTxt;
  }

  deleteCategory(id:number): void {
    this.categoryService.deleteCategory(id);
    let aux = localStorage.getItem('deletedCategory'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.ca=auxTxt;
  };
}