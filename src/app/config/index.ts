import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port:process.env.PORT,
  database_url:process.env.MONGODB_URI,
  salt_number:process.env.BCRYPT_SALT_NUMBER,
  node_env:process.env.NODE_ENV,
  secret_token:process.env.SECRET_ACCESS_TOKEN,
  refresh_token:process.env.REFRESH_ACCESS_TOKEN,
  token_expires_in:'1d',
  refresh_expires_in:'2d'
}