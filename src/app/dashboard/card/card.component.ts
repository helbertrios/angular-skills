import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
     console.log("O card "+card.name+" recebeu 1 like, totalizando: "+card.likes);
     card.likes += 1;
     this.httpClient
         .put('/api/skills', card)
         .subscribe(
         (ret: any) => {
             console.log("put "+JSON.stringify(ret));
        }

     );

      this.httpClient
          .get('/api/skills?id='+card.id)
          .subscribe(
              (ret: any) => {
                  console.log("get "+JSON.stringify(ret));
              }
          );
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
  }

}
