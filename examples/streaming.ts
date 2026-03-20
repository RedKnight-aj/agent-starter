/**
 * Streaming Response
 * Get real-time token streaming
 */

import { Agent } from '../src/agents';

const agent = new Agent({
  provider: 'openai',
  model: 'gpt-4o',
  apiKey: process.env.OPENAI_API_KEY!,
});

async function streaming() {
  // For streaming, you'd use the provider's streaming API
  // This is a simplified example
  const response = await agent.chat('Write a story');
  console.log(response);
}

streaming();
