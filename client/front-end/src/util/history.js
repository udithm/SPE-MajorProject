import { createBrowserHistory } from 'history';
import store from '../app/store';
import { hideErrorClearTimeout } from '../actions/error';

const history = createBrowserHistory();

history.listen(() => {
  if (store.getState().error) store.dispatch(hideErrorClearTimeout());
});

export default history;