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
  constructor(public productService:ProductService, public categoryService:CategoryService, public route: ActivatedRoute) { }

  public routeSub?:Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      //console.log(id);
      this.getDataProductId(id);
    })
    this.getCategoryData();
  }

  productStock?:number;
  objectP:Product={id:0, name:"", price:0, stock:0, description:"", color:"", size:"", categoryId:0, featuredPhoto:""};
  getDataProductId(id:number):void{
    this.productService.getProductId(id);
    let aux = localStorage.getItem('productPerId'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objectP=auxTxt;
      this.productStock = this.objectP.stock;
      this.calculateStock(this.productStock);
    
  }
  
  objectCat?:Category[];
  getCategoryData():void{
    this.categoryService.getCategory()
    let aux = localStorage.getItem('categoryList'); //recupera dato con comillas
    let auxTxt = JSON.parse(JSON.stringify(aux)); //para que no de problemas de tipo
    this.objectCat=auxTxt;
  }

  calculateStock(stock:number){
    for (var i = 1; i <= stock; i++) {
      let option = document.getElementById('stock-select') as HTMLTableElement;
        option.innerHTML += `
        <option value="${i}">${i}</option>
        `;
    }
  }

  popup() {
    const popup = document.querySelector(".popup"); 
    if(popup?.classList.contains("hideP")){
      popup?.classList.add("showP");
      popup?.classList.remove("hideP");
    }else{
      popup?.classList.add("hideP");
      popup?.classList.remove("showP");
    }
  }

  addToCart(id:string, img:string, name:string, price:string, size:string, quant:string){
    let lclStg = {
      id: id,//idProduct
      img: img,
      name: name,
      price: parseInt(price)*parseInt(quant),
      size: size,
      quant: quant}
    localStorage.setItem("Producto" + id, JSON.stringify(lclStg));
     alert("Producto/s añadido/s al carrito.");
     
  }
}