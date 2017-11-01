import React, { Component } from 'react';
import { Article } from './Article';
import PropTypes from 'prop-types';

export class Outfit extends Component {

  static propTypes = {
    articles: PropTypes.any,
    name: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="mdl-grid">
          {this.props.articles.map((article, index) => {
            return (
              <div className="mdl-cell mdl-cell--4-col" key={index}><Article price={article.price} discountedPrice={article.discountedPrice} wearsPerMonth={article.wearsPerMonth} monthsPerYear={article.monthsPerYear} years={article.years} image={article.image} store={article.store} key={index} /></div>
            );
          })}
        </div>
      </div>
    );
  }
}