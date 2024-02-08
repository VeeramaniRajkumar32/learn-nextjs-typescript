// import { drizzle } from "drizzle-orm/mysql2";
// import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

export async function conn() {
    // const connection = await mysql.createConnection({
    //     host: process.env.DB_HOST,
    //     username: process.env.DB_USER,
    //     password: process.env.DB_PASS,
    //     database: process.env.DB_PASS,
    // });

    // create the connection
    const connection = connect({
        host: process.env["DATABASE_HOST"],
        username: process.env["DATABASE_USERNAME"],
        password: process.env["DATABASE_PASSWORD"],
    });

    const db = drizzle(connection);
    // await connection.end();
}