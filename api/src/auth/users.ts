import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
  
  
async function createUsers() {
  const saltRounds = 10;
  const hashedPassword1 = await bcrypt.hash('pass', saltRounds);
  const hashedPassword2 = await bcrypt.hash('pass', saltRounds);
  const hashedPassword3 = await bcrypt.hash('test', saltRounds);

  const users = [
      {
            cin: '1234',
      password: hashedPassword1,
      role: 'admin',
    },
    {
      cin: '4321',
      password: hashedPassword2,
      role: 'user',
    },
    {
            cin: '9876',
            password: hashedPassword3,
            role: 'user',
    },
  ];

  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

createUsers();