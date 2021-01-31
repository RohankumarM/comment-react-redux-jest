import stateSchema from './stateSchema';
import tv4 from 'tv4';

export default ({ dispatch, getState }) => (next) => (action)  => {
  next(action);


  //retrieve the redux state - getState() is a function

  //compare the redux state value with stateschema
  if(!tv4.validate(getState(), stateSchema)){
    console.warn('Invalid state schema detected!!!')
  }
}