
import Knex  from "knex";
import dbConfig from "./databaseConfig";

const databaseConnection = Knex(dbConfig)

export default databaseConnection;