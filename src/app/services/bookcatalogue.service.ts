import { Injectable } from '@angular/core';

@Injectable()
export class BookcatalogueService {

  constructor() { }
  bookcataloguejson: object = {
    "bookDetails": [
      {
        "id": "1",
        "author": "Dr. Seuss",
        "description": "Hi, I am Book 1",
        "title": "Cat in the hat",
        "ISBN": "Serial No 1",
        "category": "Fiction",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J"
      },
      {
        "id": "2",
        "author": "Philip K.",
        "description": "Hi, I am book 2",
        "title": "Do Androids Dream of Electric Sheep? ",
        "ISBN": "Serial No 2",
        "category": "Technology",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqjn_-5f-G9Q3b6RhmBRwz5puZEaHiqAFfIfp5J2lh5lPHZ-8"
      },
      {
        "id": "3",
        "author": "Douglas Adams",
        "description": "Hi, I am book 3",
        "title": "The Hitchhiker's Guide to the Galaxy",
        "ISBN": "Serial No 3",
        "category": "Science",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWteJDnOJ3CJ0UcFMg1ZYUPu33W2MCsO9dzIhhEjZbOvq744usA"
      },
      {
        "id": "4",
        "author": "Ray Bradbury ",
        "description": "Hi, I am book 4",
        "title": "Something Wicked This Way Comes",
        "ISBN": "Serial No 4",
        "category": "History",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J"
      },
      {
        "id": "5",
        "author": "Seth Grahame-Smith",
        "description": "Hi, I am book 5",
        "title": "Pride and Prejudice and Zombies",
        "ISBN": "Serial No 5",
        "category": "Fiction",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J"
      },
      {
        "id": "6",
        "author": "F",
        "description": "Hi, I am book 6",
        "title": "For Whom the Bell Tolls ",
        "ISBN": "Serial No 6",
        "category": "Literature",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqjn_-5f-G9Q3b6RhmBRwz5puZEaHiqAFfIfp5J2lh5lPHZ"
      },
      {
        "id": "7",
        "author": "Gabriel GarcÃ­a MÃ¡rquez",
        "description": "Hi, I am book 7",
        "title": "Love in the Time of Cholera",
        "ISBN": "Serial No 7",
        "category": "Horror",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J"
      },
      {
        "id": "8",
        "author": "Hunter S. Thompson",
        "description": "Hi, I am book 8",
        "title": "Fear and Loathing in Las Vegas ",
        "ISBN": "Serial No 8",
        "category": "Literature",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J"
      },
      {
        "id": "9",
        "author": "John Kennedy Toole ",
        "description": "Hi, I am book 9",
        "title": "A Confederacy of Dunces",
        "ISBN": "Serial No 9",
        "category": "Technology",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J"
      },
      {
        "id": "10",
        "author": "Mary Ann Shaffer",
        "description": "Hi, I am book 10",
        "title": "The Guernsey Literary and Potato Peel Pie Society",
        "ISBN": "Serial No 10",
        "category": "Technology",
        "thumbnailurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORaJU4QZbQqY8XQ6Z95C34L4QOdSBrAvtRYX-FPpB60W0cM6J"
      }
    ]
  }
  getBooks() {
    return this.bookcataloguejson;
  }

}
