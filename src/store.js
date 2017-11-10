import createStore from "redux-zero";

let biografy = [];
const initialState = {
    biografy: biografy,
    selected: 0,
    show: false
};

const store = createStore(initialState);
export default store;