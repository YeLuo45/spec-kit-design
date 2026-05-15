# Spec-Driven Development

> Spec-Driven Development (SDD) 方法论

## 核心理念

**先规范，再实现。**

在 AI 辅助开发中，清晰的规范可以确保 AI 生成的代码符合预期。

## 工作流

```
1. Write Spec      → 编写规范文档 (spec.md)
2. Review Spec     → 检查规范完整性
3. Generate Code   → AI 根据规范生成代码
4. Verify Impl     → 验证实现是否符合规范
5. Iterate        → 循环迭代
```

## Spec 文件结构

```markdown
# Feature: 用户认证

## 概述
简单描述功能目标。

## 功能需求
- [ ] 用户可以注册
- [ ] 用户可以登录
- [ ] 支持 JWT Token

## 非功能需求
- 响应时间 < 200ms
- 支持 1000 并发

## 验收标准
1. 注册后收到确认邮件
2. 登录返回有效 JWT
3. 错误输入返回 400
```

## 与 AI 协作

在 `CLAUDE.md` / `AGENTS.md` / `GEMINI.md` 等上下文中声明项目规范，AI 在生成代码时会遵循规范。

## 优势

- **一致性**：所有团队成员和 AI 遵循同一规范
- **可验证性**：规范即验收标准
- **可维护性**：规范变更驱动代码变更
