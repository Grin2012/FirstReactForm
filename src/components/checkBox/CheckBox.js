import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: true};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.checked});
        this.props.onChange({
            checked: event.target.checked,
        })
    }

    render() {
        const {id, name, value} = this.props;
        return (
            <input id={id}
                   className='checkbox__box'
                   type='checkbox'
                   name={name}
                   value={value}
                   onChange={this.handleChange}/>
        );
    }
}
CheckBox.defaultProps = {
    classes: ''
};

CheckBox.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string
};