import React, {useState} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class ChoiceBuilding extends React.Component {
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

    render() {
        const options = [
            {value: 'A', label: 'A'},
            {value: 'B', label: 'B'}
        ]
        return (
            <Select name={'building'}
                    onChange={this.handlerChange.bind(this)}
                    value={this.state.selectedOption}
                    className="select-container"
                    placeholder={'Выберите здание'}
                    options={options}/>
        )
    }
}

export default ChoiceBuilding;