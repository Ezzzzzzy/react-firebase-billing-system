
import { combineReducers } from "redux";
import user from '../reducers/userreducer'
import auth from '../reducers/authreducer'
import record from '../reducers/transactionreducer'


export default combineReducers({
  user,
  auth,
  record
});

