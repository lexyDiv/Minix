/* eslint-disable no-plusplus */
class User {
  constructor({
    name, id,
  }) {
    this.name = name;
    this.id = id;
    this.idenf = '';
    this.socketId = '';
  }
}

const fakeState = [
  new User({ name: 'papa', id: 0 }),
  new User({ name: 'mama', id: 1 }),
  new User({ name: 'son', id: 2 }),
];

module.exports = fakeState;
