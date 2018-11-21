import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog-service',
  templateUrl: './blog-service.component.html',
  styleUrls: ['./blog-service.component.css']
})
export class BlogServiceService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.CargarTema();
  }
  CargarTema(){
    return this.http.get('https://localhost:5001/Blog/ListaTema');
  }

}
