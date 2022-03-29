import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  objetos: Category[] = [];
  objeto: Category=  {

    id: 0,
    name: '',

  }

  constructor(public CategoryService: CategoryService,) { }

  ngOnInit(): void {
  }


  getCategory(): void {
    this.CategoryService.getCategory().subscribe(
      (Category) => {
    this.objetos = Category;
    console.log(this.objetos);
    });
  }

  postCategory(): void {
    console.log(this.objeto);
    this.CategoryService.postCategory(this.objeto).subscribe();
  }

  putCategory(): void {
    this.CategoryService.updateCategory(this.objeto).subscribe(
      (Category) => {
    this.objeto = Category;
    console.log(this.objetos);
    });
  }

  deleteCategory(id:number): void {
    this.CategoryService.deleteCategory(id).subscribe();
  }
}



