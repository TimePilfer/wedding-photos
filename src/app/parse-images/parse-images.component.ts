import { Component, OnInit } from '@angular/core';
import { GetPhotosService } from '../get-photos.service';
import { response } from 'express';

@Component({
  selector: 'app-parse-images',
  templateUrl: './parse-images.component.html',
  styleUrls: ['./parse-images.component.scss']
})
export class ParseImagesComponent implements OnInit {
  title = 'Article by Jeetendra';
  public posts : responseObject = new responseObject();
  public images : imageObject[];
  constructor(private httpService: GetPhotosService) { }
  public show = 12;

  ngOnInit() {
    this.httpService.send().then(response => {
      console.log(response);
      response.json().then(result => {
        this.images = result.data;
        console.log(this.images);
        this.posts.data = this.images;
        this.posts.pages = result.pages;
        this.posts.status = result.status;
        console.log(this.posts);
      });
    }).catch( error => {
      console.log(error);
    });
    console.log(this.posts);
    
  }


  public increaseShow() {
   this.show += 12; 
  }

  get postImage() { return (this.posts && this.posts.data) ? JSON.stringify(this.posts.data) : null }

  public postImageUrl(id:string) { return "https://drive.google.com/uc?export=view&id="+id }
  
}


export class imageObject {
  img_id:string;
  length:number;
};

export class responseObject {
  data:imageObject[];
  pages:number;
  status:string;
}