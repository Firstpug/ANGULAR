import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  cardReview = [
    { title: 'Fantastico!!', description: 'La pagina es tan facil de usar y las recetas son top.' },
    { title: 'The Best at Taste and Quality', description: 'It was really delicious taste with great quality.' },
    { title: 'Muy facil de hacer', description: 'Recetas tan faciles de hacer que quiero hacer todas.' },
    { title: 'I love it!', description: 'Its easy to use, and it makes my recipes look clean and organized' },

  
  ];

}
