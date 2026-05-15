# Quick Start

> 快速上手 Spec Kit

## 安装

```bash
pip install spec-kit
# 或
uv pip install spec-kit
```

## 创建项目

```bash
# 初始化新项目
specify init my-project --integration claude

# 进入项目目录
cd my-project

# 验证规范
specify validate
```

## 选择 AI 集成

```bash
# 列出可用集成
specify integration list

# 安装特定集成
specify integration install windsurf
```

## 编写规范

在 `docs/spec.md` 中编写功能规范：

```markdown
# Feature: 用户列表

## 概述
展示用户列表，支持分页和搜索。

## 功能需求
- 显示用户名、邮箱、注册时间
- 每页 20 条，支持翻页
- 支持按用户名搜索
```

## 生成代码

AI 根据规范生成代码，确保符合预期。

## 扩展

```bash
# 搜索扩展
specify extension search git

# 安装扩展
specify extension install spec-kit-git-hooks
```
