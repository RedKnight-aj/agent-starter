# 🚀 Agent Starter - Production-Ready AI Agent in 5 Minutes

<div align="center">

[![Stars](https://img.shields.io/github/stars/RedKnight-aj/agent-starter)](https://github.com/RedKnight-aj/agent-starter/stargazers)
[![Forks](https://img.shields.io/github/forks/RedKnight-aj/agent-starter)](https://github.com/RedKnight-aj/agent-starter/network)
[![License](https://img.shields.io/github/license/RedKnight-aj/agent-starter)](https://github.com/RedKnight-aj/agent-starter)

**Deploy a production-ready AI agent in 5 minutes. Multi-provider, MCP-ready, one-click deploy.**

</div>

## ✨ Why This?

| Problem | Solution |
|---------|----------|
| Starting from scratch takes days | Clone and run in 5 minutes |
| Hard to integrate multiple providers | Built-in multi-provider support |
| No MCP tools | Plug-and-play MCP integration |
| Deployment is painful | One-click deploy buttons |

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔄 **Multi-Provider** | OpenAI, Anthropic, Ollama, Google Gemini |
| 🔌 **MCP Ready** | Built-in MCP tool support |
| 🌐 **Web UI** | Beautiful chat interface included |
| 🚀 **One-Click Deploy** | Vercel, Railway, Render, Docker |
| 🔐 **Security** | Rate limiting, input sanitization |
| 📊 **Monitoring** | Built-in analytics |
| 💬 **Streaming** | Real-time token streaming |

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/RedKnight-aj/agent-starter.git
cd agent-starter

# Install
npm install

# Configure
cp .env.example .env
# Add your API keys

# Run
npm run dev
```

That's it! Open http://localhost:3000

## 📦 Supported Providers

| Provider | Model | Environment Variable |
|----------|-------|---------------------|
| OpenAI | gpt-4o, gpt-4o-mini | `OPENAI_API_KEY` |
| Anthropic | claude-3-5-sonnet | `ANTHROPIC_API_KEY` |
| Ollama | llama3, mistral | (local) |
| Google | gemini-pro | `GOOGLE_API_KEY` |

## 🔌 MCP Integration

Add MCP tools with one line:

```typescript
// src/tools/mcp.ts
import { MCPTool } from './mcp';

export const mcpTools = [
  new MCPTool({
    name: "brave_search",
    server: "brave-search",
    config: { api_key: process.env.BRAVE_API_KEY }
  }),
  new MCPTool({
    name: "filesystem", 
    server: "filesystem",
    config: { root: "./data" }
  }),
  new MCPTool({
    name: "github",
    server: "github",
    config: { token: process.env.GITHUB_TOKEN }
  })
];
```

## 🖥️ Web Interface

Beautiful, responsive chat UI with:
- 📝 Rich text editor
- 💬 Message history
- 📊 Token usage stats
- 🔄 Model switching
- 🌙 Dark/Light theme
- 📱 Mobile responsive

## 📦 Deploy Anywhere

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RedKnight-aj/agent-starter)

```bash
# Or from CLI
npx vercel deploy --prod
```

### Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/agent-starter)

### Docker
```bash
# Build
docker build -t agent-starter .

# Run
docker run -p 3000:3000 --env-file .env agent-starter
```

### Docker Compose
```bash
docker-compose up -d
```

## 📁 Project Structure

```
agent-starter/
├── src/
│   ├── agents/
│   │   └── index.ts        # Agent logic
│   ├── providers/
│   │   ├── openai.ts       # OpenAI provider
│   │   ├── anthropic.ts    # Anthropic provider
│   │   └── ollama.ts       # Ollama provider
│   ├── tools/
│   │   └── mcp.ts          # MCP integration
│   └── ui/
│       └── chat.tsx         # Chat interface
├── public/
│   └── logo.svg
├── .env.example            # Environment template
├── package.json
└── README.md
```

## 🔧 Configuration

Create `.env`:

```env
# Choose your provider
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...

# Optional: MCP tools
BRAVE_API_KEY=...
GITHUB_TOKEN=...

# App settings
PORT=3000
NODE_ENV=development
```

## 🤖 Use It For

- 🤖 AI chatbots
- 📚 Research assistants  
- 📝 Writing assistants
- 💻 Code assistants
- 🎫 Customer support bots

## 📊 Performance

| Metric | Value |
|--------|-------|
| Cold Start | <2s |
| Response Time | <500ms |
| Token/Message | ~1000 |

## 🤝 Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use in your projects!

## ⭐ If This Helped

Star this repo and share it! It helps others find this tool.

---

**Built with ❤️ by [RedKnight](https://github.com/RedKnight-aj)**
