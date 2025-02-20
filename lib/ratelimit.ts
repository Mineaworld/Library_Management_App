import redis from "@/database/redis";
import { Ratelimit } from "@upstash/ratelimit";

/*
- redis: The Redis client used to store and track rate-limit data.
- limiter: Uses the fixed window algorithm to allow a maximum of 3 requests per minute per key.
- analytics: When true, usage data is tracked for analysis.
- prefix: A unique prefix for the rate limit keys in Redis to avoid key collisions.
*/

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(3, "1m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;
