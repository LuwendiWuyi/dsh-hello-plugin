# dsh-hello-plugin

最小的 DeepSeek Harness（DSH）插件示例。启用后在启动终端输出 `[hello-plugin] Hello, DSH! 插件加载成功。`。插件使用 JavaScript，无运行时依赖，无需编译。

## 安装

先完成 DeepSeek Harness 自身的依赖安装和构建。使用已安装的 DSH 运行：

```sh
dsh plugin --profile web add github:LuwendiWuyi/dsh-hello-plugin
dsh --profile web
```

使用 DeepSeek Harness 源码版时，在源码仓库根目录把 `dsh` 改成 `pnpm dsh`。安装或卸载之后重启对应 profile。

需要 Node.js 22.19+（22.x）或 24+，以及可用的 pnpm。

## 在源码版中验证

```sh
pnpm dsh plugin --profile hello-demo add github:LuwendiWuyi/dsh-hello-plugin
pnpm dsh --profile hello-demo --dump-config
pnpm dsh --profile hello-demo
```

`--dump-config` 的结果应包含 `# == dsh-hello-plugin`。启动后终端应出现上述问候，按 Ctrl+C 退出。`hello-demo` 是独立的验证 profile，不提供 Web 页面。

## 文件说明

- [index.js](index.js)：`apply()` 是插件激活时调用的入口；修改问候文字后重启 profile。
- [package.json](package.json)：`main` 指定入口，`dsh.bundle.patch` 声明自动启用的配置文件。
- [cordis.patch.yml](cordis.patch.yml)：向 profile 插入插件；`name` 必须匹配包名。

输出写入 stderr，保留 stdout 给宿主应用。插件不增加模型工具或聊天界面元素。

## 打包与卸载

在插件目录运行 `pnpm pack` 可生成 `.tgz` 文件，然后使用：

```sh
dsh plugin --profile web add /absolute/path/to/dsh-hello-plugin-0.1.0.tgz
dsh plugin --profile web remove dsh-hello-plugin
```

GitHub: [LuwendiWuyi/dsh-hello-plugin](https://github.com/LuwendiWuyi/dsh-hello-plugin)
