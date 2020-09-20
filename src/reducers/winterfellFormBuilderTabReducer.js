import { fromJS } from 'immutable';

import { CHANGE_ACTIVATED_TAB } from '../common/constants';

const initialState = fromJS({
  activatedTab: null,
});

function winterfellFormBuilderTabReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVATED_TAB:
      return state.set('activatedTab', action.payload.activateTab);
    default: {
      return state;
    }
  }
}

export default winterfellFormBuilderTabReducer;
