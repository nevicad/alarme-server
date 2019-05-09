import { Server } from "./Server";

let server = new Server()
const port: any = process.env.PORT || 80

server.app.listen(port, '0.0.0.0', (err: any) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server is listening on ${port}`);
})