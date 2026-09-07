# 个人学术主页

简洁、学术、偏工程师风格的个人网站。采用 Next.js App Router、React、TypeScript 与原生 CSS，无需数据库或环境变量。

## 本地运行

安装 Node.js 22 LTS 或更新的受支持 LTS 版本。进入解压后的 `academic-homepage` 文件夹，在终端运行：

```sh
npm install -g pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

浏览器打开终端显示的地址，通常为 http://localhost:3000。开发时修改文件会自动刷新。停止服务按 Ctrl+C。

生产构建和本地运行：

```sh
pnpm build
pnpm start
```

类型检查：`pnpm typecheck`。请使用项目附带的 `pnpm-lock.yaml` 保持依赖版本一致。

## 页面

| 导航 | 地址 | 内容 |
| --- | --- | --- |
| Home | `/` | 个人介绍、研究方向、成果与项目摘要、文档入口 |
| About | `/about` | 背景资料、个人介绍、联系方式 |
| Research | `/research` | 三个可编辑的研究方向占位 |
| Publications | `/publications` | 可继续添加的论文、专利等成果列表 |
| Projects | `/projects` | 可继续添加的项目列表 |
| CV | `/cv` | 在线简历和可配置的 PDF 下载 |
| Documents | `/documents` | 公开文档列表 |

包含手机折叠菜单、当前页面高亮、键盘焦点、正文跳转、页面标题、404 页面和打印样式。

## 填写个人资料

主要编辑 `content/profile.ts`：

- `profile`：姓名、英文姓名、个人介绍和联系方式。邮箱及外部主页为空时不生成链接。
- `research`：更新已填写的研究方向，或添加其他方向。
- `publications`：填写真实成果的 `title`、`authors`、`venue`、`kind`，可选 `year` 和 `url`。
- `projects`：填写真实项目的 `title`、`summary`、`role`、`period`，可选 `url`。
- `documents`：填写文档的 `title`、`description`、`format`、`url`。

首页会自动显示成果及项目列表的前三条，顺序由数组决定。尚未添加的列表显示“待补充”，没有虚构条目。

在线简历的教育、工作、获奖及技能在 `app/cv/page.tsx` 中编辑；关于我的扩展介绍在 `app/about/page.tsx`。已根据本人提供的信息填写姓名、在读博士身份、研究方向、邮箱、两篇论文及一项专利；DOI 与申请号按提供内容录入，未独立核验。其余缺失信息均以方括号或待补充状态标注。本版没有推测研究方向、导师、就读年份、具体成果或联系方式。

### 添加 PDF 或其他公开文件

1. 将实际简历保存为 `public/documents/cv.pdf`。
2. 将 `profile.cvUrl` 改为 `/documents/cv.pdf`，CV 和 Documents 页面会自动出现下载入口。
3. 其他文件也可放入 `public/documents/`，再在 `documents` 数组填写对应 `/documents/文件名.pdf` 地址。请使用真实存在的文件路径。

`public/` 内文件上线后可直接访问，请只放准备公开的资料。照片区域目前是文字占位；有真实照片后，可在 `app/page.tsx` 的 `profile-panel` 中替换相关区域。

## GitHub + Vercel 部署

本项目尚未上传 GitHub 或部署到 Vercel，以下步骤在你的账号中完成。

1. 在 GitHub 创建一个空仓库，例如 `academic-homepage`。
2. 在本项目根目录打开终端，替换下面的仓库地址后执行：

```sh
git init
git add .
git commit -m "Create academic homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/academic-homepage.git
git push -u origin main
```

3. 登录 Vercel，选择 Add New → Project，连接 GitHub 并导入该仓库。
4. Framework Preset 选择 Next.js，Root Directory 保持项目根目录；若把代码放在仓库子文件夹，则选择含 `package.json` 的文件夹。
5. 保留自动识别的安装与构建设置（安装 `pnpm install`、构建 `pnpm build`），无需设置环境变量或自定义 Output Directory。
6. 点击 Deploy；成功后使用 Vercel 提供的网址访问。以后向已连接的分支推送更新即可触发部署。

GitHub 在这里用于管理源码，Vercel 用于托管网站；本配置并非 GitHub Pages 静态导出配置。需要自定义域名时，可在 Vercel 项目设置的 Domains 中绑定。

官方参考：[Next.js 安装说明](https://nextjs.org/docs/app/getting-started/installation)、[Vercel 的 Next.js 支持](https://vercel.com/docs/frameworks/full-stack/nextjs)、[GitHub 集成](https://vercel.com/docs/git/vercel-for-github)。

## 文件结构

```text
app/                 首页、各栏目页面、全局布局和样式
components/          导航与共享展示组件
content/profile.ts   集中的可编辑内容
public/documents/    真实公开文件放置位置（目前为空）
package.json         运行脚本与固定依赖版本
pnpm-lock.yaml       依赖锁定文件
```

## 验证范围

本版已通过生产构建（含 TypeScript 检查），并检查七个页面均返回 HTTP 200。已实现响应式断点，未进行浏览器截图或真实设备视觉测试。没有后台编辑、账号、文件上传或数据库功能；更新内容需编辑源码后重新部署。
