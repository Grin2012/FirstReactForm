import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClick();
    }

    render() {
        const {value, classes, type} = this.props;

        return (
            <button className={`button ${classes}`}
                    type={type}
                    onClick={this.handleClick}>
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