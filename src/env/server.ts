import * as v from 'valibot'

const ServerEnvSchema = v.pipe(
  v.object({
    NODE_ENV: v.picklist(['development', 'production']),
    AUTH_SECRET: v.pipe(v.string(), v.nonEmpty()),
    DATABASE_URL: v.pipe(v.string(), v.nonEmpty()),
  }),
  v.check(
    () => typeof window === 'undefined',
    'Server environment variables can only be used in the server',
  ),
)

const serverEnv = v.parse(ServerEnvSchema, {
  NODE_ENV: process.env.NODE_ENV,
  AUTH_SECRET: process.env.AUTH_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
})

export default serverEnv
