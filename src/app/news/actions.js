import * as types from './actionTypes';

export function addNews(header, content) {
  return (dispatch) => {
    dispatch({
      type: types.ADD_NEWS,
      payload: {
        header: header,
        content: content
      }
    })
  }
}