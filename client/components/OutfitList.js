import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Outfit } from './Outfit';

export class OutfitList extends Component {

  static propTypes = {
    outfits: PropTypes.array
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
          {this.props.outfits.map((outfit, index) => {
            return (
              <a href={'#' + outfit.name + '-tab'} className={'mdl-tabs__tab' + (index == 0 ? ' is-active' : '')} key={index}>{outfit.name}</a>
            );
          })}
        </div>
        
        {this.props.outfits.map((outfit, index) => {
          return (
            <div className={'mdl-tabs__panel' + (index == 0 ? ' is-active' : '')} id={outfit.name + '-tab'} key={index}>
              <Outfit name={outfit.name} articles={outfit.articles} />
            </div>
          );
        })}

      </div>
    );
  }

}