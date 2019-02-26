import {
  UPDATE_IN_APP_MESSAGES,
  FETCH_IN_APP_MESSAGES_FAILURE,
  MARK_NOTIFICATIONS_AS_VIEWED,
  UPDATE_UNVIEWED_COUNT,
} from '../contants/action-types';

const INITIAL_STATE = { messages: [], unviewedCount: 0, loading: true };

function notificationsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_IN_APP_MESSAGES:
      return {
        ...state,
        messages: action.notifications.messages || [],
        unviewedCount: action.notifications.unviewedCount || 0,
        loading: false,
      };
    case FETCH_IN_APP_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case MARK_NOTIFICATIONS_AS_VIEWED:
      return {
        ...state,
        messages: state.messages.map(message => {
          if (action.messageIds.includes(message.id)) {
            return {
              ...message,
              state: 'viewed',
            };
          }
          return message;
        }),
        unviewedCount: 0,
      };
    case UPDATE_UNVIEWED_COUNT:
      return { ...state, unviewedCount: 0 };
    default:
      return state;
  }
}

export default notificationsReducer;
