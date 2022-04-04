import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public CategoryService: CategoryService,) { }

  ngOnInit(): void {
    this.getCategoryData();
  }

  objectCat?:Category[];
  ca: Category=  { id: 0, name: ''}

  getCategoryData():void{
    this.CategoryService.getCategory().subscribe(data =>
    {
      this.objectCat = data;
      console.log(this.objectCat);
    })
  }

  postCategoryData(): void {
    console.log(this.ca);
    this.CategoryService.postCategory(this.ca).subscribe();
  }

  putCategory(): void {
    this.CategoryService.updateCategory(this.ca).subscribe(
      (Category) => {
    this.ca = Category;
    console.log(this.ca);
    });
  }

  deleteCategory(id:number): void {
    this.CategoryService.deleteCategory(id).subscribe();
  }
}