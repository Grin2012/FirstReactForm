import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export default class TextArea extends React.Component {
    render() {
        const {label, name, placeholder, value} = this.props;

        return (
            <label className='text-area__label'>{label}
                <textarea className='text-area__text' name={name} placeholder={placeholder} value={value}/>
            </label>
        );
    }
}

TextArea.defaultProps = {
    type: 'text'
};

TextArea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
};