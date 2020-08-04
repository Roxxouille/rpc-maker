import axios from 'axios';
import { GET_COMMANDS, commandsToState } from '../actions/backoffice';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMANDS: {
      console.log('get commands');
      const token = localStorage.getItem('token');
      axios.get('http://localhost:3000/commands', { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(commandsToState(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
      break;
  }
};
