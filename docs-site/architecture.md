# Architecture

> Spec Kit 系统架构

## 1. Overview

Spec Kit 是一个完整的 Spec-Driven Development (SDD) 工具包，包含：

- **Specify CLI**：项目引导工具，快速接入 SDD 工作流
- **Integration System**：多 AI 编程工具集成框架
- **Extension System**：扩展市场和插件系统

## 2. 目录结构

```
spec-kit/
├── src/speckit_cli/          # Python CLI 源码
│   └── integrations/          # AI 集成（claude/gemini/windsurf/copilot/...）
│       ├── __init__.py       # INTEGRATION_REGISTRY
│       ├── base.py           # IntegrationBase 等基类
│       └── [agent]/
│           └── __init__.py   # 各 Agent 集成类
│
├── docs/                     # 文档（docfx）
│   ├── index.md
│   ├── quickstart.md
│   └── reference/
│
├── extensions/               # 扩展系统
│   ├── catalog.json         # 官方扩展目录
│   ├── catalog.community.json
│   ├── EXTENSION-API-REFERENCE.md
│   ├── EXTENSION-DEVELOPMENT-GUIDE.md
│   └── git/selftest/
│
├── integrations/             # 集成目录
│   ├── catalog.json
│   └── catalog.community.json
│
└── presets/                 # 预设模板
    └── templates/
```

## 3. Integration Architecture

每个 AI agent 是独立的集成子包，位于 `src/specify_cli/integrations/<key>/`：

| Base Class | 用途 | 文件格式 |
|-----------|------|---------|
| `MarkdownIntegration` | Markdown 命令模板 | `.md` |
| `TomlIntegration` | TOML 格式命令 | `.toml` |
| `YamlIntegration` | YAML 配方文件 | `.yaml` |
| `SkillsIntegration` | Skill 目录 | `SKILL.md` |
| `IntegrationBase` | 完全自定义 | 任意 |

**注册中心是 Python 集成层元数据的唯一真实来源。**

## 4. Extension System

扩展系统允许扩展核心功能：

```
extensions/
├── catalog.json              # 官方扩展目录
├── catalog.community.json    # Community 扩展
├── git/                     # Git 集成扩展
└── selftest/                # 自测扩展
```

## 5. 技术栈

| 组件 | 技术 |
|------|------|
| CLI | Python 3.10+ |
| 包管理 | uv / pip |
| 文档 | docfx (Markdown) |
| 测试 | pytest |
