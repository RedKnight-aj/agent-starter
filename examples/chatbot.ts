/**
 * Simple Chatbot Example
 * Build a chatbot in 10 lines of code
 */

import { Agent } from '../src/agents';

const agent = new Agent({
  provider: 'openai',
  model: 'gpt-4o',
  apiKey: process.env.OPENAI_API_KEY!,
});

async function chat() {
  const response = await agent.chat('Hello! What are you?');
  console.log('Bot:', response);
}

chat();
