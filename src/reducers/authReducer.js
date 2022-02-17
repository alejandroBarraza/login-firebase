import { type } from '../types/type';

//si esta login
// {
//     uid:89192838192389,
//     name: "juan",
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case type.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            };
        case type.logout:
            return {};

        default:
            return state;
    }
};
