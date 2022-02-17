import { type } from '../types/type';

export const setError = (error) => {
    return {
        type: type.setError,
        payload: {
            error,
        },
    };
};
export const removeError = () => {
    return {
        type: type.removeError,
    };
};

export const startLoading = () => {
    return {
        type: type.startLoading,
    };
};
export const finishLoading = () => {
    return {
        type: type.finishLoading,
    };
};
