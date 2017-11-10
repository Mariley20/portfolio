import store from "./store";
export const closeModal = () => {
    store.setState({
        show: false
    })
}
export const showModal = () => {
    store.setState({
        show: true
    })
}