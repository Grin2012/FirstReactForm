import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class FormField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange({
            value: event.target.value,
            type: this.props.type,
            name: this.props.name
        })
    };

    render() {
        const {label, type, name, placeholder} = this.props;
        return (
            <label className='form-field__label'>{label}
                <input className='form-field__input'
                       value={this.state.value}
                       name={name}
                       type={type}
                       placeholder={placeholder}
                       onChange={this.handleChange}/>
            </label>
        );
    }
}

FormField.defaultProps = {
    type: 'text'
};
FormField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
};