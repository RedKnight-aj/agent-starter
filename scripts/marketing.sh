#!/bin/bash
# Agent Starter - Autonomous Marketing Script
# Runs daily to grow the repo

REPO="RedKnight-aj/agent-starter"
DATE=$(date +%Y-%m-%d)

echo "=== Agent Starter Marketing - $DATE ==="

# 1. Check current stats
echo "📊 Current Stats:"
STARS=$(curl -s "https://api.github.com/repos/$REPO" | python3 -c "import json,sys; print(json.load(sys.stdin).get('stargazers_count',0))")
echo "Stars: $STARS"

# 2. Star relevant repos
echo ""
echo "⭐ Starring relevant AI repos..."
STAR_REPOS=(
    "e2b-dev/awesome-ai-agents"
    "langchain-ai/langgraph"
    "microsoft/semantic-kernel"
    "run-llama/llama_index"
    "humanlayer/humanlayer"
    "n8n-io/n8n"
    "modelcontextprotocol/registry"
    "microsoft/playwright-mcp"
    "github/github-mcp-server"
    "mcp-use/mcp-use"
)

for r in "${STAR_REPOS[@]}"; do
    gh api -X PUT "user/starred/$r" 2>/dev/null && echo "  ✓ Starred: $r"
done

# 3. Find issues to help
echo ""
echo "🔍 Finding issues to help..."
ISSUES=$(curl -s "https://api.github.com/search/issues?q=agent+OR+ai+assistant+is:issue+state:open+no:assignee" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('total_count',0))")
echo "Found $ISSUES open issues"

# 4. Engagement
echo ""
echo "📢 Engagement summary:"
echo "- Starring done"
echo "- Issues: $ISSUES available"

echo ""
echo "=== Done ==="
