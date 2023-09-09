const userBase = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  },
  {
    id: 2,
    username: "guest",
    password: "guest",
  },
];

function getUserBase() {
  const usernames = userBase.map(({ username }) => username);
  return usernames;
}

function registerUser(username, password) {
  const id = userBase.length + 1;
  const newUser = { id, username, password };
  const existingUser = userBase.find((user) => user.username === username);
  if (existingUser) {
    return null;
  }
  userBase.push(newUser);
  return newUser;
}

function loginUser(username, password) {
  const existingUser = userBase.find((user) => user.username === username);
  if (existingUser && existingUser.password === password) {
    return existingUser;
  } else {
    return null;
  }
}

module.exports = {
  getUserBase,
  registerUser,
  loginUser,
};
