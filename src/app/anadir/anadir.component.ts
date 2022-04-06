import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css'],
})
export class AnadirComponent implements OnInit {
  selectedFile: ImageSnippet | undefined;
  constructor(public ProductService: ProductService, public ImageService:ImageService) {}

  ngOnInit(): void {
  }

  selecetdFile:File =  new File([""], "filename", { type: 'text/html' });
  onFileUpload(event:any){
    this.selecetdFile = event.target.files[0];
  }

  postPhoto() :void {
    this.ImageService.wannaMyPhoto(this.selecetdFile).subscribe();
  }


  // objectsPrList: Product[] = [];

  // objectPr: Product = {
  //   id:0,
  //   name: '',
  //   price: 0,
  //   stock: 0,
  //   description: '',
  //   color: '',
  //   size: '',
  //   categoryId: 1,
  //   featuredPhoto: '',
  // };

  // getDataProductId(id: number): void {
  //   this.ProductService.getProductId(id).subscribe((data) => {
  //     this.objectPr = data;
  //   });
  // }

  // productIdNum:number = 0;

  // getId(productId:string){
  //   this.productIdNum = parseInt(productId);
  //   return this.productIdNum;
  // }

  // getDataProducts(): void {
  //   this.ProductService.getProduct().subscribe((data) => {
  //     this.objectsPrList = data;
  //   });
  // }

  // postProduct(): void {
  //   this.ProductService.postProduct(this.objectPr).subscribe();
  // }

  // putProduct(id: number): void {
  //   this.ProductService.putProduct(id, this.objectPr).subscribe((product) => {
  //     console.log(this.objectPr);
  //   });

  // }
  // deleteProduct(id: number): void {
  //   this.ProductService.deleteProduct(id).subscribe();
  // }

}