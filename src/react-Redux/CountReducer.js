import { Add, Reduce } from "../ConsetVriable";


const init = {
    count: 0,
};

function countReducer(state = init, action){
    switch (action.type) {
        case Add:
            return {
                ...state,
                count: state.count + parseInt(actions.number, 10),
            };
        case Reduce:
            return {
                ...state,
                count: state.count - parseInt(actions.number, 10),
            };
        default:
            return state;
    }
}

export default countReducer; 