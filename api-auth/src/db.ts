import { Pool } from "pg";

const connectionString = 'postgres://ayplvhlh:2-34ICcFArseiiuqqBnXPY75wRw9j2Tw@kesavan.db.elephantsql.com/ayplvhlh'
const db = new Pool({connectionString})

export default db