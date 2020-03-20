const Express = require("express");
const server = new Express();
const router = require("./routes");

server.use(router)
// connect()

server.listen(process.env.API_PORT || 3333)
console.log(`listening ${process.env.API_PORT||3333}`)
