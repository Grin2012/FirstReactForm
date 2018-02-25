import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className='layout'>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}
Layout.propTypes = {
    children: PropTypes.node
};