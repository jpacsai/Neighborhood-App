import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from './../components/DatePicker';
import { hideDatePicker } from './../actions/hideDatePicker';

class DateContainer extends Component {
    render() {
        return (
            <div className='date-container'>
                <button type="button" onClick={ () => this.props.hideDatePicker(this.props.isHidden) }>
                    Select Dates
                </button>
                { this.props.isHidden === false && <DatePicker /> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isHidden: state.dateHidden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hideDatePicker: hideDatePicker }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DateContainer);
