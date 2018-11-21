import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogservice:BlogServiceService) { }

  ngOnInit() {
    this.CargarListaTema();
  }
  ListaTemas:any;
  CargarListaTema(){
    this.blogservice.CargarTema().subscribe(
      data=>{
        this.ListaTemas=data;
      }
    )

  }
  selectTemaid:any;
  selectNombre:any;
  CargarTema(temid:any, nombre:any){
    this.selectTemaid=temid;
    this.selectNombre=nombre;
  }

}
