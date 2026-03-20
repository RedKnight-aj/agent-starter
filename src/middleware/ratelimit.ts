/**
 * Rate Limiting Middleware
 * Prevent abuse of your agent
 */

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;
    
    // Get existing requests
    const userRequests = this.requests.get(identifier) || [];
    const recentRequests = userRequests.filter(time => time > windowStart);
    
    if (recentRequests.length >= this.config.maxRequests) {
      return false;
    }
    
    // Add new request
    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);
    return true;
  }

  getRemaining(identifier: string): number {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;
    const userRequests = this.requests.get(identifier) || [];
    const recentRequests = userRequests.filter(time => time > windowStart);
    return this.config.maxRequests - recentRequests.length;
  }
}
