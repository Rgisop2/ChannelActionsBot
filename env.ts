import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(8140111290:AAHkbPYHFIEiOIrQlGaNRDFyuUv-qvu2Mi8),
  OWNERS: str(1327021082),
  MONGO_URL: str(mongodb+srv://rgruhan0:Ruhan9366@cluster0.wum1lek.mongodb.net/?retryWrites=true&w=majority),
});
