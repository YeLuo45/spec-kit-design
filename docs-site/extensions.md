# Extension System

> Spec Kit 扩展系统

## Overview

扩展系统允许扩展 Spec Kit 核心功能，通过插件机制接入。

## 扩展类型

| 类型 | 说明 |
|------|------|
| `git` | Git 集成扩展 |
| `selftest` | 自测扩展 |
| `community` | Community 扩展 |

## 官方扩展目录

- `extensions/catalog.json` — 官方扩展
- `extensions/catalog.community.json` — Community 扩展

## 安装扩展

```bash
specify extension install <extension-name>
```

## 开发扩展

参见 [Extension Development Guide](/extension-dev)
