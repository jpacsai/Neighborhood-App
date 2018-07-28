import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';

export default class Place extends Component {


  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    return (
       <div className='greatPlaceStyle'>
          {this.props.text}
       </div>
    );
  }
}