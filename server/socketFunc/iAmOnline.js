/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-unreachable-loop */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
const fakeState = require('../fakeDB/fakeUsers');

const onlineList = require('../fakeDB/onlineList');
const usersOnlineData = require('../fakeDB/usersOnlineData');

function iAmOnline(io, socket, user) {
  console.log(user);
  // const currentSocketId = socket.id;
  // !usersOnlineData[user.id]
  //   ? usersOnlineData[user.id] = 1
  //   : usersOnlineData[user.id]++;
  // const onlineUserData = {
  //   socketId: currentSocketId,
  //   userId: user.id,
  //   name: user.name,
  // };
  // const onlineUser = fakeState.find((el) => el.id === user.id);
  // onlineUser.socketId = currentSocketId;
  // const onlineListData = [];
  // for (const key in onlineList) {
  //   const ou = onlineList[key];
  //   if (ou.userId !== user.id) {
  //     onlineListData.push(ou);
  //     io.to(key).emit('userSendOnline', onlineUserData);
  //   }
  // }

  // socket.emit('iAmSend', { onlineUserData, onlineListData }); // user of not fake db with all includes here !
  // onlineList[currentSocketId] = onlineUserData;
 
}

module.exports = iAmOnline;
