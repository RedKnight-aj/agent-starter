/**
 * AI Agent Core
 * Production-ready agent with multi-provider support
 */

import { OpenAI } from 'openai';
import { Anthropic } from '@anthropic-ai/sdk';

export type Provider = 'openai' | 'anthropic' | 'ollama';

export interface AgentConfig {
  provider: Provider;
  model: string;
  apiKey: string;
  temperature?: number;
  maxTokens?: number;
}

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class Agent {
  private client: OpenAI | Anthropic | any;
  private config: AgentConfig;
  private messages: Message[] = [];

  constructor(config: AgentConfig) {
    this.config = config;
    this.client = this.initClient();
  }

  private initClient() {
    switch (this.config.provider) {
      case 'openai':
        return new OpenAI({ apiKey: this.config.apiKey });
      case 'anthropic':
        return new Anthropic({ apiKey: this.config.apiKey });
      default:
        throw new Error(`Provider ${this.config.provider} not supported`);
    }
  }

  async chat(message: string): Promise<string> {
    this.messages.push({ role: 'user', content: message });
    
    let response: string;
    
    if (this.config.provider === 'openai') {
      const completion = await this.client.chat.completions.create({
        model: this.config.model,
        messages: this.messages,
        temperature: this.config.temperature,
        max_tokens: this.config.maxTokens,
      });
      response = completion.choices[0]?.message?.content || '';
    } else if (this.config.provider === 'anthropic') {
      const message_result = await this.client.messages.create({
        model: this.config.model,
        messages: this.messages,
        temperature: this.config.temperature,
        max_tokens: this.config.maxTokens,
      });
      response = message_result.content[0]?.type === 'text' 
        ? message_result.content[0].text 
        : '';
    }
    
    this.messages.push({ role: 'assistant', content: response });
    return response;
  }

  clearHistory() {
    this.messages = [];
  }
}

export default Agent;
