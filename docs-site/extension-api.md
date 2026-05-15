# Extension API Reference

> 扩展 API 参考

## Extension 结构

```python
class Extension:
    name: str
    version: str
    description: str

    def setup(self) -> None:
        """扩展安装时调用"""
        pass

    def teardown(self) -> None:
        """扩展卸载时调用"""
        pass

    def register_commands(self, registry: CommandRegistry) -> None:
        """注册扩展命令"""
        pass
```

## CommandRegistry

```python
class CommandRegistry:
    def register(self, name: str, handler: Callable) -> None:
        """注册命令处理器"""

    def unregister(self, name: str) -> None:
        """注销命令"""
```

## 生命周期

1. `setup()` — 扩展安装
2. `register_commands()` — 注册命令
3. `teardown()` — 扩展卸载
