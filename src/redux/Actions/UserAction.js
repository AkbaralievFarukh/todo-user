import axios from "axios";
import {GET_USER} from "../type";

export const getUser = () => {
    return (dispatch) => {
        axios(`https://6564248aceac41c0761d7f0e.mockapi.io/user`)
          .then(({data}) => {
                dispatch({
                    type: GET_USER,
                    payload: data
                })
            })
    }
}