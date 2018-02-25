import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Button extends React.Component {
    render() {
        const {value, classes, type} = this.props;

        return (
            <button className={`button ${classes}`} type={type}>
                {value}
            </button>
        );
    }
}

Button.defaultProps = {
    classes: '',
    type: 'button'
};

Button.propTypes = {
    value: PropTypes.string,
    classes: PropTypes.string,
    type: PropTypes.string
};