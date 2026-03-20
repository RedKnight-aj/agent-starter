/**
 * Agent with MCP Tools
 * Give your agent capabilities
 */

import { Agent } from '../src/agents';
import { mcpRegistry } from '../src/tools/mcp';

async function agentWithTools() {
  const agent = new Agent({
    provider: 'openai',
    model: 'gpt-4o',
    apiKey: process.env.OPENAI_API_KEY!,
  });

  // Use MCP tool
  const searchResult = await mcpRegistry.executeTool('web_search', {
    query: 'latest AI news'
  });
  
  console.log('Search results:', searchResult);
}

agentWithTools();
