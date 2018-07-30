import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { selectDay } from './../actions/selectDay';

class DatePicker extends Component {

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

            let month = (date.getMonth() + 1) + '';
            month = month.length < 2 ? '0' + month : month;

            let day = (date.getDate() + '');
            day =  day.length < 2 ? '0' + day : day;
            
            const dateFormat = date.getFullYear() + '-' + month + '-' + day;
            week.push(dateFormat);
        }
        return week;
    }

    transformDays(days) { // "2018-07-27" ==> date object ==> weekday as a number (0-6)
        const formattedDays = days.map(date => {
            const dayNum = new Date(date.slice(0,4), parseInt(date.slice(5, 7)-1, 10), parseInt(date.slice(8,10), 10)).getDay();
            return dayNum;
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
        let noEventDays;
        let formatNoEventDays;
        if (availableDays) {
            noEventDays = weekDays.filter((day) => {
                return !availableDays.includes(day);
            });
            formatNoEventDays = this.transformDays(noEventDays);
        }

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
        availableDays: state.filterLists.dates
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ dayClick: selectDay }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);