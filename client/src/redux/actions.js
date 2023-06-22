export const SET_WORDS = []
export const SET_USER = ''


export const setWords = words => dispatch => {
    dispatch({
        type: SET_WORDS,
        paylod: words,
    })
}