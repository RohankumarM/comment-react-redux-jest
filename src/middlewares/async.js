export default ({ dispatch }) => next => action => {
  // debugger;
  //no payload field on action and no promise on action payload
  if(!action.payload  || !action.payload.then){
    return next(action);
  }

  //if action payload has promise, wait for it to resolve AND then create a new action and dispatch that action
  action.payload.then(function (response){
    const newAction = {...action, payload: response};
    dispatch(newAction);
  });

}
