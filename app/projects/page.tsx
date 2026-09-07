import { projects } from "@/content/profile";
import { EmptyState, PageHeading } from "@/components/ui";
export const metadata = {title:"Projects · 项目实践"};
export default function Projects(){return <><PageHeading number="04" english="Projects" title="项目实践" description="从研究问题到系统实现，记录项目过程与个人贡献。"/><div className="page-body">{projects.length ? projects.map((item,i)=><article className="record" key={i}><p className="eyebrow">{item.period}</p><h3>{item.title}</h3><p>{item.summary}</p><p>个人贡献：{item.role}</p>{item.url && <a href={item.url}>项目资料 ↗</a>}</article>) : <EmptyState title="暂未添加项目" description="每个项目可补充背景、系统方案、个人贡献、图片或视频，以及已公开的成果链接。"/>}</div></>}
