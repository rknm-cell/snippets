export const fetchWordsRequest = () => ({
    type: 'FETCH_WORDS_REQUEST',
  });
  
  export const fetchWordsSuccess = (words) => ({
    type: 'FETCH_WORDS_SUCCESS',
    payload: words,
  });
  
  export const fetchWordsFailure = (error) => ({
    type: 'FETCH_WORDS_FAILURE',
    payload: error,
  });
  
  export const fetchWords = () => {
    return (dispatch) => {
      dispatch(fetchWordsRequest());
      fetch('http://127.0.0.1:5555/words') // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => dispatch(fetchWordsSuccess(data)))
        .catch((error) => dispatch(fetchWordsFailure(error)));
    };
  };
  