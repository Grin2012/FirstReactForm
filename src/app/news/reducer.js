import * as types from './actionTypes';

const initialState = {
  currentId: 1,
  itemList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEWS: {
      return {
        ...state,
        itemList: [
          ...state.itemList,
          {
            id: state.currentId++,
            name: action.payload.header,
            content: action.payload.content
          }
        ]
      }
    }
    default: {
      return state;
    }
  }
}