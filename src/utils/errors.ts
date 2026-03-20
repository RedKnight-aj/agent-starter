/**
 * Error Handling Utilities
 */

export class AgentError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AgentError';
  }
}

export class RateLimitError extends AgentError {
  constructor(message: string = 'Rate limit exceeded') {
    super(message, 'RATE_LIMIT', 429);
    this.name = 'RateLimitError';
  }
}

export class AuthenticationError extends AgentError {
  constructor(message: string = 'Authentication failed') {
    super(message, 'AUTH_ERROR', 401);
    this.name = 'AuthenticationError';
  }
}

export function handleError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unknown error occurred';
}
