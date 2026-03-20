/**
 * Streaming Utilities
 * Handle streaming responses
 */

export interface StreamChunk {
  delta: string;
  done: boolean;
}

export class StreamHandler {
  private buffer: string = '';

  handleChunk(chunk: string): string {
    this.buffer += chunk;
    return chunk;
  }

  getBuffer(): string {
    return this.buffer;
  }

  clear(): void {
    this.buffer = '';
  }
}
