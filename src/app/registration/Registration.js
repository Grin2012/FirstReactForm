import React from 'react';

import Button from '../../components/button/Button';
import FormField from '../../components/formField/FormField';
import RadioButton from '../../components/radioButton/RadioButton';
import CheckBox from '../../components/checkBox/CheckBox';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import {userLogin} from "./actions";


import './style.scss';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            sex: '',
            email: '',
            password: '',
            agreement: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.userLogin(this.state);
        console.log('New registered user: {\n' +
            'firstName: ' + this.state.firstName + '\n' +
            'lastName: ' + this.state.lastName + '\n' +
            'gender: ' + this.state.sex + '\n' +
            'email: ' + this.state.email + '\n' +
            'password: ' + this.state.password + '\n' +
            'agreement: ' + this.state.agreement + ' }');
        const { history } = this.props;
        history.push('/News');
    }

    render() {
        return (
            <section className='registration__page'>
                <header className='registration__header'>
                    <h2 className='registration__heading'>Давайте начнем!</h2>
                </header>
                <form className='registration__form' onSubmit={this.handleSubmit}>
                    <FormField
                        label='Имя'
                        type='text'
                        name='firstName'
                        placeholder='Имя'
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <FormField
                        label='Фамилия'
                        type='text'
                        name='lastName'
                        placeholder='Фамилия'
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <fieldset className='registration__fieldset'>
                        <legend>Ваш пол</legend>
                        <RadioButton
                            label='Женский'
                            name='sex'
                            value='female'
                            onChange={this.handleInputChange}
                        />
                        <RadioButton
                            label='Мужской'
                            name='sex'
                            value='male'
                            onChange={this.handleInputChange}
                        />
                    </fieldset>
                    <FormField
                        label='Введите электронный адрес'
                        type='email'
                        name='email'
                        placeholder='email@gmail.com'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <FormField
                        label='Придумайте пароль'
                        type='password'
                        name='password'
                        placeholder='******'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <CheckBox id='agreement' name="agreement" type='checkbox' checked={this.state.agreement} onChange={this.handleInputChange}/>
                    <label className='registration__text' htmlFor='agreement'>
                        Я принимаю условия
                        <a href="#" className='registration__link'> Пользовательского соглашения </a> <br/>
                        и даю своё согласие на обработку моих персональных данных на условиях, определенных
                        <a href="#" className='registration__link'> Политикой конфиденциальности.'</a>
                    </label>
                    <Button
                        classes='registration__button'
                        value='Зарегистрироваться'
                        type='submit'
                    />
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.registrationReducer.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    userLogin: bindActionCreators(userLogin, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);