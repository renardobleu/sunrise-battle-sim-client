import {
  SET_ADVENTURE_PAGE_ID,
} from '../actions'

const initialState = {
  pageId: 'Introduction',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADVENTURE_PAGE_ID:
      return {
        ...state,
        pageId: action.pageId,
      };
    default:
      return state;
  }
}

export default reducer;
