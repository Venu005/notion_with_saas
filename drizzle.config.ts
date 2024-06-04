import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });
if (!process.env.DATABASE_URL) {
  console.log("Cannot find database url");
}
console.log("db connection successful");

export default {
  schema: "./src/lib/supabase/schema.ts",
  out: "migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
