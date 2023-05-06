import React, {useState} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


class ChoiceFloor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
    }

    handlerReset(){
        this.setState({selectedOption: null})
    }

    handlerChange(e){
        this.setState({selectedOption: e})
    }

    renderOption(){
        let options = [];
        for (let i = 3; i <=27; i++ ){
            options.push({value: i, label: i})
        }
        return options;
    }

    render(){
        const options = this.renderOption();
        return(
            <Select name={'floor'}
                    required={'required'}
                    onChange={this.handlerChange.bind(this)}
                    value={this.state.selectedOption}
                    className="grid__item"
                    placeholder={'Выберите этаж'}
                    options={options} />
        )
    }
}

export default ChoiceFloor;