import * as dotenv from "dotenv";

import server from "./app";

dotenv.config();

const port = process.env.PORT_EXPRESS || 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
