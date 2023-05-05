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
        return(
            <DatePicker
                className={'datepicker'}
                name={'date'}
                selected={this.state.date}
                onChange={this.handleDateChange.bind(this)}
                showTimeSelect
                timeFormat="p"
                timeIntervals={30}
                dateFormat="Pp"
                locale="ru"
            />

        )
    }
}

export default ChoiceTime;