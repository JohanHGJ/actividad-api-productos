import { PrismaClient } from '@prisma/client'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '../prisma/dev.db')

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath.replace(/\\/g, '/')}`
    }
  }
})

export default prisma