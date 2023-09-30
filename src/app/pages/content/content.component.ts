import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://animes.olanerd.com/wp-content/uploads/2023/08/1691039930_Revelada-a-sinopse-da-ultima-temporada-de-Desencanto-1200x900.jpg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = "Bla bla bla blabla "
  
  constructor(
    private route:ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => console.log(value.get("id"))
    )
  }
}
