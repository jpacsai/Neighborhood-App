import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideDatePicker } from './../actions/hideDatePicker';
import FilterModal from './../components/FilterModal';

class FilterContainer extends Component {

    render() {
        
        const { hideDatePicker, isHidden } = this.props;

        return (
            <section className='filter-container'>
                <h2 className='aside-header aside-header-filter'>Filters</h2>
                <button 
                    type="button"
                    onClick={ () => hideDatePicker(isHidden) }>
                    Show Filters
                </button>
                { !isHidden && < FilterModal /> }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        isHidden: state.isHidden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideDatePicker: hideDatePicker 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);