import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class CheckBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {checked: true};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.checked});
        this.props.onChange({
            checked: event.target.checked,
            type: 'checkbox',
            name: this.props.name
        })
    }

    render() {
        const {id, name} = this.props;
        return (
            <input id={id}
                   className='checkbox__box'
                   type='checkbox'
                   name={name}
                   onChange={this.handleChange}/>
        );
    }
};

CheckBox.defaultProps = {
    name: "",
    id: ""
};

CheckBox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
};