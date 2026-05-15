# CLI Reference

> Specify CLI 命令参考

## init

初始化 Spec Kit 项目。

```bash
specify init <project-name> --integration <agent-key>
```

### Options

| Option | 说明 |
|--------|------|
| `--integration <key>` | 指定 AI 集成（claude/gemini/windsurf/copilot/...） |
| `--template <name>` | 指定模板 |
| `--dir <path>` | 项目目录 |

## integration

管理 AI 集成。

```bash
# 安装集成
specify integration install <key>

# 卸载集成
specify integration uninstall <key>

# 列出可用集成
specify integration list
```

## extension

管理扩展。

```bash
# 安装扩展
specify extension install <name>

# 卸载扩展
specify extension uninstall <name>

# 搜索扩展
specify extension search <query>

# 列出已安装扩展
specify extension list
```

## validate

验证项目规范。

```bash
specify validate [--spec <path>]
```

## build

构建项目文档。

```bash
specify build [--output <dir>]
```
