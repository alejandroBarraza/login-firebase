import { type } from '../types/type';

const initialState = {
    loading: false,
    error: null,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.setError:
            return {
                ...state,
                error: action.payload.error,
            };
        case type.removeError:
            return {
                ...state,
                error: null,
            };
        case type.startLoading: {
            return {
                ...state,
                loading: true,
            };
        }
        case type.finishLoading: {
            return {
                ...state,
                loading: false,
            };
        }

        default:
            return state;
    }
};
