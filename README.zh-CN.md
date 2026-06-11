# Digital Demand Discovery

[English](README.md) | [简体中文](README.zh-CN.md)

一个用于澄清数字化、信息化、自动化和 AI Agent 需求的 Skill，帮助用户在进入方案设计前识别真实业务痛点、关键流程、数据流和最合适的解决载体。

当用户提出想要搭建工具、工作流、系统、看板、Agent、数据库、内部应用或自动化流程时，如果真实问题、目标结果、业务流程、数据结构或 MVP 范围仍不清晰，就适合使用这个 Skill。

## 它会产出什么

这个 Skill 会通过聚焦的需求发现对话，最终形成一份结构化文档：

- 原始需求与业务背景
- 基于第一性原理的本质问题分析
- 核心痛点与价值目标
- 当前流程、参与角色、数据与决策流
- 关键假设与验证需求
- 流程、表格、低代码、软件系统、自动化和 Agent 等不同方案载体对比
- 推荐 MVP 范围与未来路线图

## 仓库结构

```text
.
├── SKILL.md
├── references/
├── agents/openai.yaml
├── .claude-plugin/plugin.json
├── .codex-plugin/plugin.json
└── docs/
```

`SKILL.md` 是主入口。`references/` 用于维护模型路由、第一性原理分析、追问模式、方案模式和输出模板，让 Skill 主体保持简洁且可持续维护。

## 安装

见 [docs/install.md](docs/install.md)。

## 兼容性

见 [docs/compatibility.md](docs/compatibility.md)。

## 贡献者

- HANKSEN
- Codex (GPT-5.5)

## License

MIT.
