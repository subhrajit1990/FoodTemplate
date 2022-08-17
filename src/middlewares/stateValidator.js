import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
  console.log("state validator :: "+ JSON.stringify(getState()));
  console.log("state validator 2 :: "+ JSON.stringify(stateSchema));
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
  next(action);
}
