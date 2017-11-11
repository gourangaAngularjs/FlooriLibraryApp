import { QueryPipe } from './../../pipes/query.pipe';
import { BookcatalogueService } from './../../services/bookcatalogue.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bookcatalogue',
  templateUrl: './bookcatalogue.component.html',
  styleUrls: ['./bookcatalogue.component.css']
})
export class BookcatalogueComponent implements OnInit {
  
  bookCatalogue: any[];
  constructor(service: BookcatalogueService) {
    this.bookCatalogue = service.getBooks()['bookDetails'];
   }

  ngOnInit() {
  }

}
