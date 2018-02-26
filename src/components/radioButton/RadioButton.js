import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class RadioButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange({
            value: this.props.value,
            type: '',
            name: this.props.name
        })
    }
    render() {
        const { label, name, value } = this.props;

        return (
            <label className='radio-button__label'>
                <input className='radio-button__radio'
                       type='radio'
                       name={name}
                       value={value}
                       onChange={this.handleChange} />
                {label}
            </label>
        );
    }
}

RadioButton.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string
};