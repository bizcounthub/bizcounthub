import searchSubscribe from 'app/common/subscribers/search';

/**
 * Subscribe the state change
 * @param {Object} store - the redux store
 */
export default function subscribe(store) {
  let prevState = store.getState();

  const handleChange = () => {
    const state = store.getState();
    if (state === prevState) {
      return;
    }

    const prevStateCopy = prevState;
    prevState = state;

    // handle search
    searchSubscribe(state, prevStateCopy);
  };

  return store.subscribe(handleChange);
}
