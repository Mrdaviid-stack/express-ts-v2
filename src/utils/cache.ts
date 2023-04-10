import redis from 'redis'

let redisClient = redis.createClient({
  socket: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT)
  }
})

export class Cache {

  static get instance() {
    return redisClient
  }

  static async set(key: string, value: any) {
    try {
      value = typeof value === 'object' ? JSON.stringify(value) : value
      await redisClient.set(key, value, { EX: 0 })
      return true
    } catch (error) {
      console.error(error)
      console.error(`Failed to cache '${key}`)
    }
  }

  static async get(key: string, asString: boolean) {
    try {
      let { value }: any = await redisClient.get(key)
      if (!value)
        return
      value = value.toString()
      return asString ? value : JSON.parse(value)
    } catch (error) {
      console.error(error);
      console.error(`Failed to get '${key}' from cache`);
    }
  }

  static async delete(key: string) {
    try {
      await redisClient.del(key)
      return true
    } catch (error) {
      console.error(error);
      console.error(`Failed to delete ${key}`);
    }
  }

  static async flush() {
    try {
      await redisClient.flushAll()
      return true
    } catch (error) {
      console.error(error);
      console.error('Failed to refresh cache');
    }
  }

}
