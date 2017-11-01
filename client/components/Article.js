import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Article extends Component {

  static propTypes = {
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    wearsPerMonth: PropTypes.number.isRequired,
    monthsPerYear: PropTypes.number.isRequired,
    years: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    store: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <img className="mdl-card__title" src={this.props.image} style={{height: '30vh'}} />
        <div className="mdl-card__supporting-text">
          <ul className="mdl-list">
            <ArticleDetail label="Store" value={this.props.store} />


            {!this.props.discountedPrice ? <ArticleDetail label="Price" value={'$' + this.props.price.toFixed(2)} /> : 
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                <span style={{paddingRight: 5}}>Price:</span>
                <span style={{color: 'red', textDecoration: 'line-through'}}>${this.props.price.toFixed(2)}</span>&nbsp;${this.props.discountedPrice.toFixed(2)}
              </span>
            </li>
            }

            {!this.props.discountedPrice ? null : 
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                <span style={{paddingRight: 5}}>Dicount:</span>
                ${(this.props.price - this.props.discountedPrice).toFixed(2)} ({((1 - this.props.discountedPrice / this.props.price) * 100).toFixed(0)}%)
              </span>
            </li>
            }            

            <ArticleDetail label="Wears" value={this.props.wearsPerMonth * this.props.monthsPerYear * this.props.years} />
            <ArticleDetail label="Price/Wear" value={'$' + ((this.props.discountedPrice ? this.props.discountedPrice : this.props.price) / (this.props.wearsPerMonth * this.props.monthsPerYear * this.props.years)).toFixed(2)} />
          </ul>
        </div>
      </div>
    );
  }
}

class ArticleDetail extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  }

  render() {
    return (
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          <span style={{paddingRight: 5}}>{this.props.label}:</span>
          {this.props.value}
        </span>
      </li>
    )
  }
}
