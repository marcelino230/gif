import { useReducer } from 'react'

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }
        default:
            return state;
    }
}

const useForm = ({ initialKeyword = '', initialRating = 'g' } = {}) => {

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURI(initialKeyword),
        rating: initialRating
    });

    const { keyword, rating } = state;

    const updateKeyword = keyword => {
        dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword });
    }
    const updateRating = rating => {
        dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating });
    }

    return { keyword, rating, updateKeyword, updateRating }
}

export default useForm
