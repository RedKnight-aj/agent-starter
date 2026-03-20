/**
 * Conversation Context Manager
 * Manage long-running conversations
 */

export interface ContextEntry {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export class ContextManager {
  private context: ContextEntry[] = [];
  private maxEntries: number;

  constructor(maxEntries: number = 100) {
    this.maxEntries = maxEntries;
  }

  add(entry: Omit<ContextEntry, 'timestamp'>): void {
    this.context.push({
      ...entry,
      timestamp: Date.now()
    });
    
    // Trim if too long
    if (this.context.length > this.maxEntries) {
      this.context = this.context.slice(-this.maxEntries);
    }
  }

  getContext(): ContextEntry[] {
    return [...this.context];
  }

  clear(): void {
    this.context = [];
  }

  summarize(): string {
    if (this.context.length === 0) return '';
    const first = this.context[0];
    const last = this.context[this.context.length - 1];
    return `${this.context.length} messages from ${first.timestamp} to ${last.timestamp}`;
  }
}
