import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './style.scss';

class UserInformation extends React.Component {
  render() {
    return (
        <div className="user">
          <div className="user__logo"/>
          <div className="user__name">
            {this.props.firstName} {this.props.lastName}
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    firstName: state.registrationReducer.user.firstName,
    lastName: state.registrationReducer.user.lastName,
  }
};
export default connect(mapStateToProps)(UserInformation);

UserInformation.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};