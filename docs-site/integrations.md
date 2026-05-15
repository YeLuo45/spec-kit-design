# Integrations

> AI 编程工具集成系统

## Overview

Spec Kit 支持多个主流 AI 编程工具，通过统一的集成框架接入。

## 支持的集成

| Agent | Type | Format | CLI Required |
|-------|------|--------|-------------|
| Claude | Skills | Markdown | ❌ |
| Gemini | TOML | TOML | ✅ |
| Windsurf | Markdown | Markdown | ❌ |
| Codex | Skills | Markdown | ✅ |
| Copilot | Custom | Custom | ❌ |

## 集成基类

### IntegrationBase

所有集成的基类，提供 setup/teardown 逻辑。

### MarkdownIntegration

适用于标准 Markdown 命令文件。最小集成子类，无需覆盖任何方法。

```python
class WindsurfIntegration(MarkdownIntegration):
    key = "windsurf"
    config = {
        "name": "Windsurf",
        "folder": ".windsurf/",
        "commands_subdir": "workflows",
        "install_url": None,
        "requires_cli": False,
    }
    registrar_config = {
        "dir": ".windsurf/workflows",
        "format": "markdown",
        "args": "$ARGUMENTS",
        "extension": ".md",
    }
    context_file = ".windsurf/rules/specify-rules.md"
```

### TomlIntegration

适用于 TOML 格式命令文件。

```python
class GeminiIntegration(TomlIntegration):
    key = "gemini"
    config = {
        "name": "Gemini CLI",
        "folder": ".gemini/",
        "commands_subdir": "commands",
        "install_url": "https://github.com/google-gemini/gemini-cli",
        "requires_cli": True,
    }
    registrar_config = {
        "dir": ".gemini/commands",
        "format": "toml",
        "args": "{{args}}",
        "extension": ".toml",
    }
    context_file = "GEMINI.md"
```

### SkillsIntegration

适用于 Skill 目录结构（`speckit-<name>/SKILL.md`）。

```python
class CodexIntegration(SkillsIntegration):
    key = "codex"
    config = {
        "name": "Codex CLI",
        "folder": ".agents/",
        "commands_subdir": "skills",
        "install_url": "https://github.com/openai/codex",
        "requires_cli": True,
    }
    registrar_config = {
        "dir": ".agents/skills",
        "format": "markdown",
        "args": "$ARGUMENTS",
        "extension": "/SKILL.md",
    }
    context_file = "AGENTS.md"
```

## 添加新集成

1. 选择基类
2. 创建 `src/specify_cli/integrations/<key>/__init__.py`
3. 在 `__init__.py` 的 `_register_builtins()` 中注册

## Context File

`context_file` 属性指定 Agent 的上下文文件路径。setup 创建/更新 managed section，uninstall 移除 managed section。
