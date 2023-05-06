import React, {useState} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


class ChoiceRoom extends React.Component{
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
        for (let i = 1; i <=10; i++ ){
            options.push({value: i, label: i})
        }
        return options;
    }

    render(){
        // const [selectedOption, setSelectedOption] = useState(null);
        const options = this.renderOption();
        return(
            <Select name={'room'}
                    required={'required'}
                    onChange={this.handlerChange.bind(this)}
                    value={this.state.selectedOption}
                    className="grid__item"
                    placeholder={'Выберите переговорку'}
                    options={options} />
        )
    }
}

export default ChoiceRoom;