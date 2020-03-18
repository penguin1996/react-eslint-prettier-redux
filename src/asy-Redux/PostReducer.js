import * as ConsetVriable from "../ConsetVriable";

const initState = {
    IsFetch: false,
    IsInvalid: false,
    items: [],
  };


function postReducer(state = initState, actions){
    switch (actions.type) {
        case ConsetVriable.POST_REQUEST:
          return Object.assign({}, state, {
            IsFetch: true,
            IsInvalid: false,
          });
        case ConsetVriable.POST_RESVICE:
          return Object.assign({}, state, {
            IsFetch: false,
            IsInvalid: false,
            items: actions.items,
            lastDate: actions.receivedDate,
          });
          case ConsetVriable.INVALID:
          return Object.assign({}, state, {
            IsInvalid: true,
          });
        default:
          return state;
      }


}
export default postReducer;