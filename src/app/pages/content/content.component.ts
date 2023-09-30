import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://animes.olanerd.com/wp-content/uploads/2023/08/1691039930_Revelada-a-sinopse-da-ultima-temporada-de-Desencanto-1200x900.jpg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = "Bla bla bla blabla "
  constructor() {  }

  ngOnInit(): void {
    
  }
}
