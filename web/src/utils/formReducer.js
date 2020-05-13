const initialState = {
    sendSuccess: false,
    sendError: false,
    errorMessage: '',
    name: '',
    email: '',
    message: '',
};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'field':
            return {
                ...state,
                [action.fieldName]: action.payload,
            };
        case 'success':
            return {
                ...state,
                sendSuccess: true,
            };
        case 'error':
            return {
                ...state,
                sendError: true,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export { formReducer, initialState };
