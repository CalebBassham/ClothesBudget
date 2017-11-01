import React from 'react';

import { OutfitList } from './OutfitList';

import 'material-design-lite';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.blue-red.min.css';

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

export class App extends React.Component {
  render() {

    const TShirt = {
      price: 25,
      discountedPrice: 19.99,
      wearsPerMonth: 30,
      monthsPerYear: 5,
      years: 2,
      image: '//s7d2.scene7.com/is/image/dkscdn/16NIKMLGND20SSVNCAPT_Black_Black_Anthracite?$UTPMain$&hei=176&wid=176',
      store: 'Dicks'
    };

    const jeans = {
      price: 59.5,
      wearsPerMonth: 6,
      monthsPerYear: 4,
      years: 2,
      image: '//media.kohlsimg.com/is/image/kohls/381312_Kale?wid=500&hei=500&op_sharpen=1',
      store: 'Khols'
    };

    const tennisShoes = {
      price: 59.99,
      discountedPrice: 30,
      wearsPerMonth: 30,
      monthsPerYear: 12,
      years: 1,
      image: '//www.famousfootwear.com/ProductImages/shoes_ia54807.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter',
      store: 'Famous Footwear'
    };

    const dressShirt = {
      price: 45,
      discountedPrice: 10.80,
      wearsPerMonth: 5,
      monthsPerYear: 12,
      years: 4,
      image: '//media.kohlsimg.com/is/image/kohls/2344535_Navy_Blue?wid=245&hei=240&op_sharpen=1',
      store: 'Khols'
    };

    const dressPants = {
      price: 60,
      discountedPrice: 14.40,
      wearsPerMonth: 5,
      monthsPerYear: 12,
      years: 4,
      image: '//media.kohlsimg.com/is/image/kohls/2670643_Outer_Space?wid=500&hei=500&op_sharpen=1',
      store: 'Khols'
    };

    const dressShoes = {
      price: 84.99,
      discountedPrice: 54.99,
      wearsPerMonth: 5,
      monthsPerYear: 12,
      years: 4,
      image: '//www.famousfootwear.com/ProductImages/shoes_ia35642.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter',
      store: 'Famouse Footwear'
    };

    const cargoShorts = {
      price: 56,
      discountedPrice: 17.92,
      wearsPerMonth: 5,
      monthsPerYear: 8,
      years: 4,
      image: '//media.kohlsimg.com/is/image/kohls/2783451_Silver_Lining?wid=500&hei=500&op_sharpen=1',
      store: 'Kohls'
    };

    const golfShirt = {
      price: 55,
      discountedPrice: 13.20,
      wearsPerMonth: 5,
      monthsPerYear: 6,
      years: 4,
      image: '//media.kohlsimg.com/is/image/kohls/2962114_Quiet_Shade?wid=500&hei=500&op_sharpen=1',
      store: 'Kohls'
    };

    const jacket = {
      price: 99,
      wearsPerMonth: 30,
      monthsPerYear: 5,
      years: 5,
      image: '//s7d2.scene7.com/is/image/GolfGalaxy/16TNOMMPXPNMTCJCKAPOX_TNF_Black_TNF_Black?id=gWqST1&scl=4&req=tile&rect=0,0,256,256&fmt=jpg',
      store: 'Dicks'
    };

    const outfits = [
      {
        name: 'Casual',
        articles: [TShirt, jeans, tennisShoes]
      },
      {
        name: 'Outing',
        articles: [golfShirt, cargoShorts, dressShoes]
      },
      {
        name: 'Interview',
        articles: [dressShirt, dressPants, dressShoes]
      },
      {
        name: 'Jacket',
        articles: [jacket]
      }
    ];

    const articles = [
      TShirt, jeans, tennisShoes, golfShirt, cargoShorts, dressShoes, dressShirt, dressPants, jacket
    ];

    const budget = 400;
    
    var spent = 0;
    for(let article in articles) {
      spent += articles[article].price;
    }

    var saved = 0;
    for(let article in articles) {
      if(!articles[article].discountedPrice) {
        continue;
      }
      saved += articles[article].price - articles[article].discountedPrice;
    }

    return (
      <div>
        <OutfitList outfits={outfits} />

        <ul className="mdl-list">
          <li className="mdl-list__item">Budget: ${budget}</li>
          <li className="mdl-list__item">Spent: ${(spent - saved).toFixed(2)}</li>
          <li className="mdl-list__item">Saved With Discounts: ${saved.toFixed(2)}</li>
          <li className="mdl-list__item">Spent Without Discounts: ${spent.toFixed(2)}</li>
          <li className="mdl-list__item">Remaing Money: ${(budget - (spent - saved)).toFixed(2)}</li>
        </ul>
      </div>
    );
  }
}
