/**
 * REST API Server
 * Expose your agent via HTTP
 */

import express from 'express';
import { Agent } from '../agents';

const app = express();
app.use(express.json());

// Initialize agent
const agent = new Agent({
  provider: (process.env.PROVIDER as any) || 'openai',
  model: process.env.MODEL || 'gpt-4o',
  apiKey: process.env.API_KEY || '',
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const { message, system } = req.body;
    
    if (system) {
      // Set system prompt
    }
    
    const response = await agent.chat(message);
    res.json({ response, success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message, success: false });
  }
});

// Clear history
app.post('/clear', (req, res) => {
  agent.clearHistory();
  res.json({ success: true });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Agent server running on port ${PORT}`);
});

export default app;
