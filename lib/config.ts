const config = {
  env: {
    // The `!` operator is used here to assert that the environment variable will always be defined. This prevents TypeScript from raising errors about potential `undefined` values.

    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseurl: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
    },
  },
};

export default config;
