import {store} from "../redux"

const isLoggedIn = () => {
    const state = store.getState();
    console.log(state)
    return state.login.isLoggedIn;
}

export const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
        if (isLoggedIn()) {
            next();
        }

        next.redirect("/login")
    } else {
        next();
    }
}