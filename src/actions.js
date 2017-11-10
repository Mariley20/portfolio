import store from "./store";
export const closeModal = () => {
    store.setState({
        show: false
    })
}
export const showModal = () => {
    console.log('show', store.getState().show)
    store.setState({
        show: true
    });
    console.log('newshow', store.getState().show)
}