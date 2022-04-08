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

}