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

module.exports = {
  getUserBase,
};
