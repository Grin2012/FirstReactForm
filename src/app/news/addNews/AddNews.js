import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addNews } from '../actions';

import Button from '../../../components/button/Button';
import FormField from '../../../components/formField/FormField';
import TextArea from '../../../components/textArea/TextArea';

import './style.scss';

class AddNews extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      condition: true,
      title: '',
      content: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    this.setState({condition: !this.state.condition});
  }
  handleChange(target) {
    this.setState({
      [target.name]: target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewValue(this.state.title, this.state.content);
    this.setState({
      condition: true,
      title: '',
      content: ''
    });
  }

  render() {
    return (
      <form 
        className={ this.state.condition ? "add-news__background" : "add-news"}
        onSubmit={this.handleSubmit}
      >
        <div className={ this.state.condition ? "add-news__toggled" : ""}>
        <FormField
          label='Заголовок'
          classes='add-news__title'
          type='text'
          name='title'
          placeholder='Придумайте заголовок для вашей новости'
        />
        <TextArea
          label='Новость'
          classes='add-news__content'
          type='text'
          name='content'
          placeholder='Добавьте описание'
        />
        </div>
        <div className="add-news__buttons">
          <div className={ this.state.condition ? "add-news__toggled" : "add-news__cancel"} onClick={this.handleClick}>Отмена</div>
          <Button type={this.state.condition ? "submit" : "button"} classes="add-news__button" value="Добавить новость" onClick={this.handleClick}/>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemList: state.newsReducer.itemList,
  }
};

const mapDispatchToProps = (dispatch) => ({
  addNewValue: bindActionCreators(addNews, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNews);