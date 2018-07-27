import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';

export default class Place extends Component {


  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const greatPlaceStyle = {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'yellow'
      }

    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}