import React, {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify';


import ChoiceBuilding from "./choiceBuilding.jsx";
import ChoiceFloor from "./choiceFloor.jsx";
import ChoiceRoom from "./choiceRoom.jsx";
import ChoiceTime from "./choiceTime.jsx";
import choiceTime from "./choiceTime.jsx";


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    serializeForm(formNode) {
        const {elements} = formNode
        const data = Array.from(elements)
            .filter((item) => !!item.name)
            .map((element) => {
                const {name, value} = element
                return {name, value}
            })

        toast("Вы записаны" + data);
        console.log(data);
    }


    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        this.serializeForm(form);
    }

    handleFormReset(e){
        e.preventDefault();
        const form = e.target;
        this.setState({text: ''});
        this.refs.date.handlerReset();
        this.refs.building.handlerReset();
        this.refs.floor.handlerReset();
        this.refs.room.handlerReset();
    }

    handlerTextChange(e){
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <form ref='form' className={'form'} name={'test'} onSubmit={this.handleSubmit.bind(this)} onReset={this.handleFormReset.bind(this)}>
                <fieldset className={'fieldset'}>
                    <legend className={'legend'}>Выберите место проведения встречи</legend>
                    <div className={'grid'}>
                        <ChoiceBuilding ref='building'/>
                        <ChoiceFloor ref={'floor'}/>
                        <ChoiceRoom ref={'room'}/>
                    </div>
                </fieldset>
                <fieldset className={'fieldset'}>
                    <label className={'label'}>Выберите время</label>
                    <ChoiceTime ref='date'/>
                </fieldset>
                <fieldset className={'fieldset'}>
                    <label className={'label'}>Оставить комментарий</label>
                    <textarea value={this.state.text} onChange={this.handlerTextChange.bind(this)} className={'textarea'} name={'text'}></textarea>
                </fieldset>
                <fieldset className={'fieldset'}>
                    <div className={'grid'}>
                        <button type={'submit'} className={'button'}>Отправить</button>
                        <input type={'reset'} className={'button button--white'} value={'Очистить'}></input>
                    </div>
                </fieldset>
                <ToastContainer/>
            </form>
        )
    }

}

export default Form;
