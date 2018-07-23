import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { selectDay } from './../actions/selectDay';

class DatePicker extends Component {

    render() {

        let date = new Date();
        const todayDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());   
        date.setDate(date.getDate() + 6); 
        const nextWeekDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const todayTime = todayDate.getTime();
        const nextWeekTime = nextWeekDate.getTime();

        return (
            <DayPicker
                disabledDays={{
                    before: todayDate,
                    after: nextWeekDate
                }}
                selectedDays={ this.props.selectedDays }
                onDayClick={ (day) => {
                    const between = (todayTime <= day.getTime() && nextWeekTime >= day.getTime());
                    if (between) {
                        this.props.dayClick(day, this.props.selectedDays);
                    }
                }}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedDays : state.selectedDays
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ dayClick: selectDay }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);