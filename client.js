const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server.")
    conn.write("Name: SP");
    // setTimeout(() => {
    //   conn.write("Name: SP")
    // }, 1000)

  })

  conn.on('data', (data) => {
    // when server sents you data you can see it with console log
    console.log(data);
  })

  return conn;
};

module.exports = {connect}


