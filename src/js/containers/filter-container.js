import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilterModal from './../components/FilterModal';
import { modalVisibility } from './../actions/modalVisibility';

class FilterContainer extends Component {

    render() {
        
        const { modalVisibility, modalVisible } = this.props;

        return (
            <section className='filter-container'>
                <h2 className='aside-header aside-header-filter'>Filters</h2>
                <button 
                    type="button"
                    onClick={ () => {
                        modalVisibility(modalVisible);
                    } }>
                    Show Filters
                </button>
                { modalVisible && < FilterModal /> }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        modalVisible: state.modalVisibility
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        modalVisibility
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);