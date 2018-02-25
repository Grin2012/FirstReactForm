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
    };

    render() {
        const {label, type, name, placeholder} = this.props;
        return (
            <label className='form-field__label'>{label}
                <input className='form-field__input'
                       value={this.state.value}
                       onChange={this.handleChange}
                       name={name}
                       type={type}
                       placeholder={placeholder}/>
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