import { SET_USER } from "./ActionType"

export const setUser = payload => (dispatch) =>{

    dispatch({
        type : SET_USER,
        payload : payload
    })

}