import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment
  }
});
/*
export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_COMMENT, 
  payload: feedback
});

export const postFeedback = ( firstname, lastname, telnum, email, agree, contactType, message)  => ( dispatch ) => {
  const newFeedback = {
    firstname: firstname ,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message
  };
  newFeedback.date = new Date().toISOString();

  return fetch(baseUrl + 'feedback', {
    method: 'POST',
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        throw error;
  })
.then(response => response.json())
.then(response => dispatch(addFeedback(response)))
.then (response => { alert('Thank you for your feedback! ' + JSON.stringify(response));})
.catch(error =>  { console.log('post feedback', error.message);
  alert('Your feedback could not be sent.\nError: '+error.message); });
};*/

