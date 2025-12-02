import axios from "axios";
import { useEffect } from "react";

export async function useStart(setUser, setStart) {
    useEffect(() => {
        axios.get('/users')
            .then(res => {
               // console.log(res);
                const { user, message } = res.data;
                if (message) {
                    console.log(message);
                }
               // console.log(user);
                return setUser(user);
            })
            .catch(err => {
                console.log(err.message);
            })
            .finally(() => {
                setStart(true);
            });
    }, [setUser, setStart]);
}