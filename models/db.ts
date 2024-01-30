import { Pool } from 'pg'

let globalPool: Pool
//1
export function getDb() {
  if (!globalPool) {
    const connectionString = process.env.POSTGRES_URL
    console.log('connectionString', connectionString)

    globalPool = new Pool({
      connectionString
    })
  }

  return globalPool
}
