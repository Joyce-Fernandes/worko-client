import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Product } from '../product';
import { ImageService } from '../image.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { CouponService } from '../coupon.service';
import { Coupon } from '../coupon';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  selectedFile: ImageSnippet | undefined;

  constructor(public UserService: UserService, public ProductService: ProductService, public CategoryService:CategoryService, public ImageService:ImageService, public CouponService:CouponService) { }

  ngOnInit(): void {
    this.getUserData(); 
    this.getDataProducts();
    this.getDataCategories();
    this.getCoupon();
  }
  
  usr?: User[];
  user: User={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: "User"
  }

  us: User={
    id:0,
    name:"",
    surname:"",
    email: "",
    password:"",
    adress:"",
    rol: "User"
  }

  userIdNum:number = 0;

  getId(userId:string){
    this.userIdNum = parseInt(userId);
    return this.userIdNum;
  }

  getUserData(): void {
      this.UserService.getUsers().subscribe((data) => {
        this.usr = data;
      });
  }

  objectsPrList?: Product[];
  photo: string = "";

  objectPr: Product = {
    id:0,
    name: '',
    price: 0,
    stock: 0,
    description: '',
    color: '',
    size: '',
    categoryId: 0,
    featuredPhoto: '',
  };

  pr: Product = {
    id:0,
    name: '',
    price: 0,
    stock: 0,
    description: '',
    color: '',
    size: '',
    categoryId: 1,
    featuredPhoto: '',
  };

  objectsCatList?: Category[];

  objectCat: Category = {
    id:0,
    name: ''
  };

  getDataProducts(): void {
    this.ProductService.getProduct().subscribe((data) => {
      this.objectsPrList = data;
    });
  }

  getDataCategories(): void {
    this.CategoryService.getCategory().subscribe((data) => {
      this.objectsCatList = data;
    });
  }

  productIdNum:number = 0;
  categoryIdNum:number = 0;

  getImageRoute(){
    let file = document.getElementById('file-name') as HTMLInputElement;
    let fullPath = file.value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        let foto = document.getElementById('foto') as HTMLInputElement;
        foto.value = `../../assets/img/products/${filename}`;
        this.photo = `../../assets/img/products/${filename}`;
    }
  }

  getDataProductId(id: number): void {
    this.ProductService.getProductId(id).subscribe((data) => {
      this.objectPr = data;
    });
  }

  getDataCategoryId(id: number): void {
    this.CategoryService.getCategoryId(id).subscribe((data) => {
      this.objectCat = data;
    });
  }

  getIdPr(productId:string){
    this.productIdNum = parseInt(productId);
    return this.productIdNum;
  }

  getCatId(categoryId:string){
    this.categoryIdNum = parseInt(categoryId);
    return this.categoryIdNum;
  }

  showDefault(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');
    const adminProduct = document.getElementById('admin-product');
    const adminNewProduct = document.getElementById('admin-newproduct');
    const adminCoupon = document.getElementById('admin-coupon');

    adminCoupon?.classList.add('hide');
    adminCoupon?.classList.remove('show');
    adminProduct?.classList.add('hide');
    adminProduct?.classList.remove('show');
    adminUser?.classList.remove('show');
    adminUser?.classList.add('hide');
    adminInit?.classList.remove('hide');
    adminInit?.classList.add('show');
    adminNewUser?.classList.remove('show');
    adminNewUser?.classList.add('hide');
    adminNewProduct?.classList.remove('show');
    adminNewProduct?.classList.add('hide');
  }

  showAdminCoupon(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');
    const adminProduct = document.getElementById('admin-product');
    const adminNewProduct = document.getElementById('admin-newproduct');
    const adminCoupon = document.getElementById('admin-coupon');

    adminCoupon?.classList.add('show');
    adminCoupon?.classList.remove('hide');
    adminProduct?.classList.add('hide');
    adminProduct?.classList.remove('show');
    adminUser?.classList.add('hide');
    adminUser?.classList.remove('show');
    adminInit?.classList.remove('show');
    adminInit?.classList.add('hide');
    adminNewUser?.classList.remove('show');
    adminNewUser?.classList.add('hide');
    adminNewProduct?.classList.remove('show');
    adminNewProduct?.classList.add('hide');
  }

  showAdminNewProduct(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');
    const adminProduct = document.getElementById('admin-product');
    const adminNewProduct = document.getElementById('admin-newproduct');
    const adminCoupon = document.getElementById('admin-coupon');

    adminCoupon?.classList.add('hide');
    adminCoupon?.classList.remove('show');
    adminProduct?.classList.add('hide');
    adminProduct?.classList.remove('show');
    adminUser?.classList.add('hide');
    adminUser?.classList.remove('show');
    adminInit?.classList.remove('show');
    adminInit?.classList.add('hide');
    adminNewUser?.classList.remove('show');
    adminNewUser?.classList.add('hide');
    adminNewProduct?.classList.remove('hide');
    adminNewProduct?.classList.add('show');
  }

  showAdminProducts(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');
    const adminProduct = document.getElementById('admin-product');
    const adminNewProduct = document.getElementById('admin-newproduct');
    const adminCoupon = document.getElementById('admin-coupon');

    adminCoupon?.classList.add('hide');
    adminCoupon?.classList.remove('show');
    adminProduct?.classList.add('show');
    adminProduct?.classList.remove('hide');
    adminUser?.classList.add('hide');
    adminUser?.classList.remove('show');
    adminInit?.classList.remove('show');
    adminInit?.classList.add('hide');
    adminNewUser?.classList.remove('show');
    adminNewUser?.classList.add('hide');
    adminNewProduct?.classList.remove('show');
    adminNewProduct?.classList.add('hide');
  }

  showAdminNewUser(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');
    const adminProduct = document.getElementById('admin-product');
    const adminNewProduct = document.getElementById('admin-newproduct');
    const adminCoupon = document.getElementById('admin-coupon');

    adminCoupon?.classList.add('hide');
    adminCoupon?.classList.remove('show');
    adminProduct?.classList.add('hide');
    adminProduct?.classList.remove('show');
    adminUser?.classList.add('hide');
    adminUser?.classList.remove('show');
    adminInit?.classList.remove('show');
    adminInit?.classList.add('hide');
    adminNewUser?.classList.remove('hide');
    adminNewUser?.classList.add('show');
    adminNewProduct?.classList.remove('show');
    adminNewProduct?.classList.add('hide');
  }
  
  showAdminUser(){
    const adminInit = document.getElementById('admin-init');
    const adminUser = document.getElementById('admin-user');
    const adminNewUser = document.getElementById('admin-newuser');
    const adminProduct = document.getElementById('admin-product');
    const adminNewProduct = document.getElementById('admin-newproduct');
    const adminCoupon = document.getElementById('admin-coupon');

    adminCoupon?.classList.add('hide');
    adminCoupon?.classList.remove('show');
    adminProduct?.classList.add('hide');
    adminProduct?.classList.remove('show');
    adminUser?.classList.add('show');
    adminUser?.classList.remove('hide');
    adminInit?.classList.remove('show');
    adminInit?.classList.add('hide');
    adminNewUser?.classList.remove('show');
    adminNewUser?.classList.add('hide');
    adminNewProduct?.classList.remove('show');
    adminNewProduct?.classList.add('hide');
  }

  postUser(): void {
    this.UserService.postUser(this.user).subscribe(data =>{
      let infoPopup = document.querySelector("#popup-info") as HTMLElement;
      infoPopup.innerHTML = "¡Usuario/a registrado/a con éxito!"
      this.refresh();
    });
  }

  getUserIdData(id:number):void{
    this.UserService.getUserId(id).subscribe(data =>
    {
      this.us = data;
    })
  }

  putUserData(id:number): void {
      this.UserService.putUser(id, this.us).subscribe((us) => {
        this.us = us;
    });
    alert("¡Usuarix modificado con éxito!");
  }

  deleteUserData(id: number): void {
    this.UserService.deleteUser(id).subscribe();
    let infoPopup = document.querySelector("#popup-info") as HTMLElement;
    infoPopup.innerHTML = "¡Usuario/a eliminado/a con éxito!"
  }

  postProductData(): void {
    this.pr.featuredPhoto = this.photo;
    this.ProductService.postProduct(this.pr).subscribe();
  }

  putProduct(id: number): void {
    this.ProductService.putProduct(id, this.objectPr).subscribe((product) => {
    });

  }

  deleteProduct(id: number): void {
    this.ProductService.deleteProduct(id).subscribe();
  }
  objects: Coupon[] = [];
  object: Coupon=  {

    id: 0,
    name: '',
    startDate: new Date(Date.now ()),
    endDate: new Date(Date.now ()),
    discount:2,

  }
  couponIdNum:number = 0;

  getDataCouponId(id: number): void {
    this.CouponService.getCouponId(id).subscribe((data) => {
      this.object = data;
    });
  }

  getCouponId(couponId:string){
    this.couponIdNum = parseInt(couponId);
    return this.couponIdNum;
  }

  getCoupon(): void {
    this.CouponService.getCoupon().subscribe(
      (Coupon) => {
    this.objects = Coupon;
    });
  }

  postCoupon(): void {
    this.CouponService.postCoupon(this.object).subscribe();
  }

  putCoupon(): void {
    this.CouponService.putCoupon(this.object).subscribe(
      (Coupon) => {
    this.object = Coupon;
    });
  }

  deleteCoupon(id:number): void {
    this.CouponService.deleteCoupon(id).subscribe();
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

  refresh(){
    window.location.reload();
  }
   
}