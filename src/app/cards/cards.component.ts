import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cardData = [
    { title: 'Pasta a la Genovesa', description: 'Esta receta proveniente de la Bella Italia le fascinara a tu paladar.', imageUrl: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/05/29/5ed11fb61d750.jpeg' },
    { title: 'Pasta a la Genovesa', description: 'Esta receta proveniente de la Bella Italia le fascinara a tu paladar.', imageUrl: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/05/29/5ed11fb61d750.jpeg' },
    { title: 'Pasta a la Genovesa', description: 'Esta receta proveniente de la Bella Italia le fascinara a tu paladar.', imageUrl: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/05/29/5ed11fb61d750.jpeg' },

  ];
}