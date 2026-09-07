// 在这里统一更新个人信息；未确认的信息请保留为空或标记待填写。
export const profile = {
  name: "周广越",
  englishName: "Guangyue Zhou",
  role: "机械电子工程博士研究生（在读）",
  university: "燕山大学",
  school: "机械工程学院",
  bio: "我是周广越，燕山大学机械工程学院机械电子工程在读博士，研究方向为桥梁工程施工的无人机视觉巡检。2025年6月毕业于华北理工大学机械设计制造及其自动化专业，同年9月通过保研直博进入燕山大学。这里记录我的科研成果与项目实践，并整理可公开分享的个人简历和文档。",
  email: "Zgy6634@163.com",
  phone: "18660762183",
  birthDate: "2003年3月19日",
  scholarUrl: "",
  githubUrl: "",
  cvUrl: "/documents/cv.pdf", // 添加 public/documents/cv.pdf 后填入 /documents/cv.pdf
};

export const research = [
  { title: "桥梁工程施工的无人机视觉巡检", description: "面向桥梁工程施工场景，研究无人机视觉巡检。具体研究问题、技术方法与实验进展待补充。", label: "当前研究方向" },
];

export type Publication = { title: string; authors: string; venue: string; kind: string; year?: string; url?: string };
export type Project = { title: string; summary: string; role: string; period: string; url?: string };
export type Document = { title: string; description: string; format: string; url: string };
// 只添加真实且可公开的条目。空数组会显示待补充状态。
export const publications: Publication[] = [
  { title: "自动化包装机械运行速度控制系统的开发设计", authors: "周广越（第一作者；完整作者列表待补充）", year: "2023", venue: "DOI: 10.3969/j.issn.2095-6487.2023.8.jrzdh202308003", kind: "论文", url: "https://doi.org/10.3969/j.issn.2095-6487.2023.8.jrzdh202308003" },
  { title: "基于轨迹条件灵巧度的机械臂规格优化设计", authors: "周广越（第二作者；完整作者列表待补充）", year: "2024", venue: "DOI: 10.3969/j.issn.2095-6487.2024.1.jrzdh202401013", kind: "论文", url: "https://doi.org/10.3969/j.issn.2095-6487.2024.1.jrzdh202401013" },
  { title: "一种机械制造用的机械爪", authors: "[发明人列表待补充]", venue: "申请/专利号：CN202311418175.X · 授权状态待确认", kind: "专利" },
];
export const projects: Project[] = [];
export const documents: Document[] = [];
