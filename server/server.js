 const express = require('express');

 require('@babel/register');
// // const path = require('path');
 const serverConfig = require('./serverConfig/serverConfig');
 const cors = require('cors');

 const app = express();

 const server = require('http').createServer(app);
 const io = require('socket.io')(server);

io.on('connection', (socket) => {
  //////////////////////////////////////////////////
  socket.on('join room', (data) => {
    // console.log("join room : ");
    // console.log(data);
  })
  /////////////////////////////////////////////
  socket.on('IamOnline', (data) => {
    console.log("IamOnline socketId : ", socket.id);
    iAmOnline(io, socket, data);
  });
  /////////////////////////////////////// => china
  socket.on('init', () => {
    console.log("init socketId : ", socket.id);
    socket.emit('init', { id: socket.id });
  });

  socket.on('request', (data) => {
    //console.log("request data : ", data);
    socket.to(data.to).emit('request', { from: socket.id });
    // const receiver = users.get(data.to);
    // if (receiver) {
    //   receiver.emit('request', { from: id });
    // }
  });

  socket.on('call', (data) => {
    // console.log("call data : ", data);
    socket.to(data.to).emit('call', { ...data, from: socket.id });
    // const receiver = users.get(data.to);
    // if (receiver) {
    //   receiver.emit('call', { ...data, from: id });
    // } else {
    //   socket.emit('failed');
    // }
  });

  socket.on('end', (data) => {
    //  console.log("end data : ", data);
    socket.to(data.to).emit('end');
    // const receiver = users.get(data.to);
    // if (receiver) {
    //   receiver.emit('end');
    // }
  });

  ////////////////////////////////////////////////// <= china

  socket.on('disconnecting', () => {
    const deletedData = onlineList[socket.id];
    if (deletedData) {
      delete onlineList[socket.id];
      let userOnlinesCount = usersOnlineData[deletedData.userId];
      userOnlinesCount--;
      if (!userOnlinesCount) {
        for (const key in onlineList) {
          io.to(key).emit('iAmLeve', deletedData.userId);
        }
        delete usersOnlineData[deletedData.userId];
      } else {
        usersOnlineData[deletedData.userId]--;
      }
    }
  });
});

 serverConfig(app);
 app.use(cors());

 const mainRoutes = require('./routes/main.routes');
 const usersRoutes = require('./routes/users.routes');

// const ssr = require('./middleweres/renedrComponent');
 const iAmOnline = require('./socketFunc/iAmOnline');
 const onlineList = require('./fakeDB/onlineList');
 const usersOnlineData = require('./fakeDB/usersOnlineData');


// app.use(ssr);
 app.use('/', mainRoutes);
 app.use('/users', usersRoutes);

 const PORT = 4000;

server.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});