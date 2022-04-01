import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  constructor(public ProductService:ProductService, public CategoryService:CategoryService, public route: ActivatedRoute) { }

  public routeSub?:Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      this.getDataProductId(id);
    })
    this.getCategoryData();
  }

  objectP:Product={id:0, name:"", price:0, stock:0, description:"", color:"", size:"", categoryId:0, featuredPhoto:""};
  getDataProductId(id:number):void{
    this.ProductService.getProductId(id).subscribe(data=>
    {
      this.objectP = data;
    })
  }

  objectCat?:Category[];
  getCategoryData():void{
    this.CategoryService.getCategory().subscribe(data =>
    {
      this.objectCat = data;
    })
  }

  calculateStock(){
  
  }

  addToCart(id:string, img:string, name:string, price:string, size:string, quant:string){
    let lclStg = {
      id: id,
      img: img,
      name: name,
      price: price,
      size: size,
      quant: quant}
    localStorage.setItem("Producto" + id, JSON.stringify(lclStg));
    alert("Producto/s añadido/s al carrito.");
  }
}