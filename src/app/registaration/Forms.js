import React from 'react';
import {Link} from "react-router-dom";

import Button from '../../components/button/Button';
import FormField from '../../components/formField/FormField';
import RadioButton from '../../components/radioButton/RadioButton';
import CheckBox from '../../components/checkBox/CheckBox';

import './style.scss';

export default class Registration extends React.Component {
    render() {
        return (
            <section className='registration__page'>
                <header className='registration__header'>
                    <h2 className='registration__heading'>Давайте начнем!</h2>
                </header>
                <form className='registration__form'>
                    <FormField
                        label='Имя'
                        type='text'
                        name='firstName'
                        placeholder='Имя'
                    />
                    <FormField
                        label='Фамилия'
                        type='text'
                        name='lastName'
                        placeholder='Фамилия'
                    />
                    <fieldset className='registration__fieldset'>
                        <legend>Ваш пол</legend>
                        <RadioButton
                            label='Женский'
                            name='sex'
                            value='female'
                        />
                        <RadioButton
                            label='Мужской'
                            name='sex'
                            value='male'
                        />
                    </fieldset>
                    <FormField
                        label='Введите электронный адрес'
                        type='email'
                        name='email'
                        placeholder='email@gmail.com'
                    />
                    <FormField
                        label='Придумайте пароль'
                        type='password'
                        name='password'
                        placeholder='******'
                        modificator='pass'
                    />
                    <CheckBox id='agreement' type='checkbox'/>
                    <label htmlFor='agreement' className='registration__text'>
                        Я принимаю условия
                        <a href="#" className='registration__link'> Пользовательского соглашения </a>
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