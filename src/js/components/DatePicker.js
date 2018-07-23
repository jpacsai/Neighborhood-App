import React, { Component } from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';

class DatePicker extends Component {
    render() {
        let date = new Date();
        const today = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        }       
        const todayDate = new Date(today.year, today.month, today.day);   
        date.setDate(date.getDate() + 7); 
        const nextWeek = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        }
        const nextWeekDate = new Date(nextWeek.year, nextWeek.month, nextWeek.day);

        return (
            <DayPicker
            disabledDays={[
              {
                before: todayDate,
                after: nextWeekDate
              }
            ]} />
        )
    }
}


export default DatePicker;