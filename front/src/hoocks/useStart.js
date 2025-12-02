import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export async function useStart(setStart) {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/users')
            .then(res => {
               // console.log(res);
                const { user, message } = res.data;
                if (message) {
                    console.log(message);
                }
                console.log('here 1');
                 dispatch({ type: "GET_USER", payload: user });
            })
            .catch(err => {
                console.log(err.message);
            })
            .finally(() => {
                setStart(true);
                dispatch({ type: "SET_LOADING", payload: false });
                console.log("here");
            });
    }, [setStart, dispatch]);
}