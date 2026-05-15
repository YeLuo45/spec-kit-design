# Publishing Guide

> 发布 Spec Kit 扩展

## 发布到 Community

1. 在 `extensions/catalog.community.json` 中添加扩展条目
2. 提交 Pull Request
3. 通过 Code Review 后合并

## 扩展条目格式

```json
{
  "name": "my-extension",
  "version": "1.0.0",
  "description": "My custom extension",
  "author": "Your Name",
  "repository": "https://github.com/you/spec-kit-my-extension",
  "tags": ["git", "automation"]
}
```

## 最佳实践

- 使用语义化版本
- 提供清晰的 README
- 包含测试用例
- 遵循贡献规范
