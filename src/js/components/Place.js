import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import { connect } from 'react-redux';

class Place extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    return (
       	<div 
        	className='placeStyle'
			onMouseEnter={() => {
				
			}}
			onMouseLeave={() => {

			}}
        >
			{this.props.text}
			{ this.props.showInfo && <div>Hello</div>}
			{ /* this.state.isMouseInside ? <button>Your Button</button> : null */}
       	</div>
    );
  }
}

function mapStateToProps(state) {
    return {
		showInfo: state.closeUp
    }
}

export default connect(mapStateToProps)(Place);