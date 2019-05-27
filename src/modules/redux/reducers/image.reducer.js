const image = (state = [], action) => {
    console.log('FROM THE REDUCER: ', action);
    switch (action.type) {
        case 'SET_IMAGE':
            return action.payload;
        default:
            return state;
    }
}

export default image;
