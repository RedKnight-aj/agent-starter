/**
 * Multi-turn Conversation
 * Maintain context across messages
 */

import { Agent } from '../src/agents';

const agent = new Agent({
  provider: 'anthropic',
  model: 'claude-3-5-sonnet',
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

async function conversation() {
  // First message
  await agent.chat('My name is Alice.');
  
  // Second message - agent remembers context
  const response = await agent.chat('What is my name?');
  console.log(response); // "Your name is Alice"
  
  // Clear history when needed
  agent.clearHistory();
}

conversation();
