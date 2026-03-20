# 🚀 Agent Starter - AI Agent Template for Production

<div align="center">

[![Stars](https://img.shields.io/github/stars/RedKnight-aj/agent-starter)](https://github.com/RedKnight-aj/agent-starter/stargazers)
[![Forks](https://img.shields.io/github/forks/RedKnight-aj/agent-starter)](https://github.com/RedKnight-aj/agent-starter/network)
[![NPM](https://img.shields.io/npm/v/agent-starter)](https://www.npmjs.com/package/agent-starter)
[![License](https://img.shields.io/github/license/RedKnight-aj/agent-starter)](https://github.com/RedKnight-aj/agent-starter)

**Production-ready AI agent template. Deploy in 5 minutes.**

</div>

---

## ⭐ Why Agent Starter?

| Problem | Solution |
|---------|----------|
| Building AI agents from scratch takes days | Clone → configure → run in 5 minutes |
| Hard to integrate multiple LLM providers | Built-in OpenAI, Anthropic, Ollama support |
| No MCP tools integration | Plug-and-play MCP tools |
| Deployment is painful | One-click deploy buttons |
| No production features | Rate limiting, error handling included |

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **Multi-Provider** | OpenAI GPT-4, Anthropic Claude, Ollama local models |
| 🔌 **MCP Ready** | Model Context Protocol tool integration |
| 🌐 **REST API** | Built-in Express server |
| 🐳 **Docker** | Production-ready Docker configuration |
| 📊 **Rate Limiting** | Prevent abuse, protect your API |
| 💬 **Streaming** | Real-time token streaming |
| 🔐 **Error Handling** | Production-grade error management |
| 📝 **TypeScript** | Full type safety |
| 🧪 **Examples** | Ready-to-use code examples |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/RedKnight-aj/agent-starter.git
cd agent-starter

# Install
npm install

# Configure
cp .env.example .env
# Add your OPENAI_API_KEY or ANTHROPIC_API_KEY

# Run
npm run dev
```

**That's it!** Your AI agent is running at http://localhost:3000

---

## 📦 Installation (NPM)

```bash
npm install agent-starter
```

```typescript
import { Agent } from 'agent-starter';

const agent = new Agent({
  provider: 'openai',
  model: 'gpt-4o',
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await agent.chat('Hello!');
```

---

## 🔧 Configuration

### Environment Variables

```env
# Provider (openai, anthropic, ollama)
PROVIDER=openai

# Model
MODEL=gpt-4o

# API Keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Optional: MCP Tools
BRAVE_API_KEY=...
GITHUB_TOKEN=...

# Server
PORT=3000
```

---

## 🛠️ Usage Examples

### Simple Chatbot

```typescript
import { Agent } from './src/agents';

const agent = new Agent({
  provider: 'openai',
  model: 'gpt-4o',
  apiKey: process.env.OPENAI_API_KEY!,
});

const response = await agent.chat('Hello!');
console.log(response);
```

### Multi-Provider

```typescript
// Switch providers easily
const openai = new Agent({ provider: 'openai', model: 'gpt-4o', ... });
const anthropic = new Agent({ provider: 'anthropic', model: 'claude-3-5-sonnet', ... });
const ollama = new Agent({ provider: 'ollama', model: 'llama3', ... });
```

### REST API Server

```typescript
// Already included! Run and use:
POST /chat { "message": "Hello" }
GET /health
POST /clear
```

---

## 🐳 Deploy

### Docker

```bash
docker-compose up
```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RedKnight-aj/agent-starter)

### Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/agent-starter)

---

## 📁 Project Structure

```
agent-starter/
├── src/
│   ├── agents/        # Core agent logic
│   ├── providers/     # LLM provider integration
│   ├── tools/         # MCP tools
│   ├── middleware/    # Rate limiting
│   ├── server/        # REST API
│   └── utils/         # Utilities
├── examples/          # Usage examples
├── docker/            # Docker configs
└── package.json
```

---

## 🔍 Search Keywords

This template helps with:

- AI agent template
- OpenAI agent
- Anthropic Claude agent
- LLM agent framework
- MCP server template
- AI chatbot template
- Production AI agent
- Node.js AI agent
- TypeScript AI assistant
- Multi-provider LLM
- AI agent boilerplate
- LangChain alternative
- Custom GPT agent
- AI automation

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch
3. Commit and push
4. Open a Pull Request

---

## 📝 License

MIT - Free to use!

---

## ⭐ If This Helped

Star this repo and share it!

---

**Built with ❤️ by [RedKnight](https://github.com/RedKnight-aj)**
