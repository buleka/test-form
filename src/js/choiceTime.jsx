import React from 'react'
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)

class ChoiceTime extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: null
        }
    }

    handleDateChange(current){
        this.setState({date: current})
    }

    handlerReset(){
        this.setState({date: null})
    }

    render(){

        let minDate = new Date();

        let minTime = minDate.setHours(9, 0);
        let maxTime = minDate.setHours(19, 0);

        const isWeekday = (minDate) => {
            const day = minDate.getDay();
            return day !== 0 && day !== 6;
        };


        const filterPassedTime = (time) => {
            const currentDate = new Date();
            const selectedDate = new Date(time);
            return currentDate.getTime() < selectedDate.getTime();
        };

        return(
            <DatePicker
                required={'required'}
                className={'datepicker'}
                name={'date'}
                autocomplete="off"
                selected={this.state.date}
                onChange={this.handleDateChange.bind(this)}
                showTimeSelect
                timeFormat="p"
                timeIntervals={30}
                dateFormat="Pp"
                locale="ru"
                minDate={minDate}
                minTime={minTime}
                maxTime={maxTime}
                filterDate={isWeekday}
                filterTime={filterPassedTime}
                autoComplete='off'
            />

        )
    }
}

export default ChoiceTime;