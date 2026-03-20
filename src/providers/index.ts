/**
 * Provider Factory
 * Easily switch between LLM providers
 */

import { Agent, AgentConfig } from '../agents';

export function createAgent(config: AgentConfig): Agent {
  return new Agent(config);
}

export const PROVIDERS = {
  openai: {
    models: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo'],
    envKey: 'OPENAI_API_KEY',
  },
  anthropic: {
    models: ['claude-3-5-sonnet', 'claude-3-opus'],
    envKey: 'ANTHROPIC_API_KEY',
  },
  ollama: {
    models: ['llama3', 'mistral', 'codellama'],
    envKey: 'OLLAMA_BASE_URL',
  },
} as const;
