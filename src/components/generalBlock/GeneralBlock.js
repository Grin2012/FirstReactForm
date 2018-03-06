import React from 'react';
import PropTypes from 'prop-types';

import UserInformation from '../../components/userInformation/UserInformation';

import './style.scss';

export default class MainBox extends React.Component {
  render() {
    return (
        <div className="general-block">
          <div className="general-block__header">
            <div className="general-block__logo"/>
            <UserInformation/>
          </div>
          {this.props.children}
        </div>
    );
  }
}
MainBox.propTypes = {
    children: PropTypes.node.isRequired
};