import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { selectDay } from './../actions/selectDay';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.dateCreator = this.dateCreator.bind(this);
    }

    dateCreator(days = 0) {
        let date = new Date();
        date.setDate(date.getDate() + days); 
        const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return newDate;
    }

    render() {
        const todayDate = this.dateCreator(0);   
        const nextWeekDate = this.dateCreator(6);
        const todayTime = todayDate.getTime();
        const nextWeekTime = this.dateCreator(7).getTime();

        return (
            <DayPicker
                showOutsideDays
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