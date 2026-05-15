# Extension Development Guide

> 开发 Spec Kit 扩展

## 创建扩展

### 1. 初始化扩展

```bash
specify extension create my-extension
```

### 2. 实现扩展类

```python
from spec_kit import Extension, CommandRegistry

class MyExtension(Extension):
    name = "my-extension"
    version = "1.0.0"
    description = "My custom extension"

    def setup(self) -> None:
        pass

    def teardown(self) -> None:
        pass

    def register_commands(self, registry: CommandRegistry) -> None:
        registry.register("hello", self.hello_command)

    def hello_command(self, args: list[str]) -> None:
        print("Hello from my extension!")
```

### 3. 测试扩展

```bash
specify extension install ./my-extension
specify hello
```

## 发布扩展

参见 [Publishing Guide](/extension-publish)
