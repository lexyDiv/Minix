const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Papa',
        pass: await bcrypt.hash('123', 10),
        logo: '',
      },
      {
        name: 'Mama',
        pass: await bcrypt.hash('123', 10),
        logo: '',
      },
      {
        name: 'Son',
        pass: await bcrypt.hash('123', 10),
        logo: '',
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
