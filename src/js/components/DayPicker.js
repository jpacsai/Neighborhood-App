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

    weekCreator() { // format: "2018-07-27"
        const week = [];
        for (let i = 0; i < 7; i++) {
            let date = new Date();
            date.setDate(date.getDate() + i);

            let month = (date.getMonth()+1) + '';
            month = month.length < 2 ? '0' + month : month;

            let day = (date.getDate() + '');
            day =  day.length < 2 ? '0' + day : day;
            
            const dateFormat = date.getFullYear() + '-' + month + '-' + day;
            week.push(dateFormat);
        }
        return week;      
    }

    transformDays(days) {
        const formattedDays = days.map(date => {
            const format = String(new Date(date.slice(0,4), parseInt(date.slice(5, 7)-1, 10), parseInt(date.slice(8,10), 10)));
            const s = format.slice(0,3);
            switch(s) {
                case 'Mon':
                    return 1;
                case 'Tue':
                    return 2;
                case 'Wed':
                    return 3;
                case 'Thu':
                    return 4;
                case 'Fri':
                    return 5;
                case 'Sat':
                    return 6;
                case 'Sun':
                    return 7;
                default:
                    return -1;
            }
        })
        return formattedDays;
    }

    render() {
        const { availableDays, selectedDays, dayClick } = this.props;

        const todayDate = this.dateCreator(0);   
        const nextWeekDate = this.dateCreator(6);
        const todayTime = todayDate.getTime();
        const nextWeekTime = this.dateCreator(7).getTime();
        
        const weekDays = this.weekCreator();
        const noEventDays = weekDays.filter((day) => {
            return !availableDays.includes(day);
        });
        const formatNoEventDays = this.transformDays(noEventDays);
        
        return (
            <DayPicker
                firstDayOfWeek={ 1 }
                disabledDays={ [
                    {
                        before: todayDate,
                        after: nextWeekDate
                    },
                    {
                        daysOfWeek: formatNoEventDays
                    }
                 ] }
                selectedDays={ selectedDays }
                onDayClick={ (day) => {
                    const between = (todayTime <= day.getTime() && nextWeekTime >= day.getTime());
                    if (between) {
                        dayClick(day, selectedDays);
                    }
                } }
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedDays : state.filtersToApply.selectedDays,
        availableDays: state.filters.dates
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ dayClick: selectDay }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);