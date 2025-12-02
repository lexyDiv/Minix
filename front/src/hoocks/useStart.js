import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import socket from "../socket/socket";

export async function useStart(setStart) {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/users')
            .then(res => {
               // console.log(res);
                const { user, message } = res.data;
                if (message) {
                    console.log(message);
                } else {
                    socket.emit('IamOnline', user);
                }
                 dispatch({ type: "GET_USER", payload: user });
            })
            .catch(err => {
                console.log(err.message);
            })
            .finally(() => {
                setStart(true);
                dispatch({ type: "SET_LOADING", payload: false });
            });
    }, [setStart, dispatch]);
}