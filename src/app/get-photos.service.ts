import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {
  static createTextOutput() {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http: HttpClient) {}

  send(): Promise<Response> {
    var headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      'content-type': 'text/plain'
    });
    return fetch("https://script.google.com/macros/s/AKfycbxI6rgr9rpj9T1Y6pSV76nozmFJxRJb4Gdq7nBnYWvwaXbLUFxhJ0EVXLmHKgDC_0g6Hg/exec");
    
  }
}

