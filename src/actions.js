import store from "./store";
export const selectionWork  = (index) => {
    store.setState({
        selected : index
    })
}