import { createApp } from "./server";
import { Database } from "./database";

const database = new Database();

const app = createApp(database);
const port = process.env.HTTP_PORT || 3000;

app.listen(port);
console.log(`Server listening on ${port}`);
