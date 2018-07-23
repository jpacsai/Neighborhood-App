import React, { Component } from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';

class DatePicker extends Component {
    render() {
        let date = new Date();
        const todayDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());   
        date.setDate(date.getDate() + 7); 
        const nextWeekDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        return (
            <DayPicker
                disabledDays={{
                    before: todayDate,
                    after: nextWeekDate
                }}
            />
        )
    }
}


export default DatePicker;