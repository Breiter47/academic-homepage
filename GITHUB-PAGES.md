# GitHub Pages 上线

此版本已适配 Breiter47/academic-homepage，PDF 保持原样。

1. 仓库 Settings → General → 最下方 Danger Zone → Change repository visibility → Change to public，按 GitHub 提示确认。
2. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
3. 回到 Code → Add file → Upload files，将更新包解压后 academic-homepage 文件夹内部的全部文件及目录拖入，提交到 main。请特别确认包含 `.github/workflows/pages.yml` 和 `next.config.mjs`，不要上传 ZIP 本身。
4. 在 Actions 标签中查看 Deploy academic homepage；成功时显示绿色对勾。如果上传时尚未启用 Pages，请先完成第 2 步，再在 Actions 中重新运行。
5. 成功部署后的预期地址：https://breiter47.github.io/academic-homepage/ 。以 Settings → Pages 显示的网址为准。

若上传未包含 .github 文件夹，可用 Add file → Create new file，文件名填 `.github/workflows/pages.yml`，将本地同名文件的全部内容粘贴后提交。

后续更新源码并提交到 main 会自动重新发布。不需要 Vercel。

本地仍可用 pnpm dev。在 GitHub Actions 中设置 GITHUB_PAGES=true，pnpm build 会导出 out/；普通本地构建仍支持 pnpm start。仓库名称改变时需修改 next.config.mjs 中的 basePath。

已验证静态构建、七个页面文件及照片/PDF 的仓库路径。尚未在 GitHub 账号中开启或验证实际部署。

参考：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
