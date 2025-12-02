import { useEffect } from "react";
import socket from "../socket/socket";

export function useSocket() {
      useEffect(() => {

    ///////////////////////////////  => call

    ////////////////////////////// <= call

    socket.on("iAmSend", (res) => {
     console.log("iAmSend : ", res);
      // setUser(res.onlineUserData);
      // setOnlineList(res.onlineListData);
    })

    socket.on("iAmLeve", (res) => {
        console.log("iAmLeve : ", res);
    //  setOnlineList(prev => prev.filter(u => u.userId !== res));
    })


    socket.on('userSendOnline', (res) => {
        console.log("userSendOnline : ", res);
        // setOnlineList(prev => {
        //   const index = prev.findIndex(el => el.userId === res.userId);
        //   if (index === -1) {
        //     return [...prev, res];
        //   }
        //   return prev;
        // });
         
    });
  }, []);
}