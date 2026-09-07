import { research } from "@/content/profile";
import { PageHeading } from "@/components/ui";
export const metadata = {title:"Research · 研究方向"};
export default function Research(){return <><PageHeading number="02" english="Research" title="研究方向" description="桥梁工程施工的无人机视觉巡检。"/><div className="page-body"><div className="research-grid">{research.map((item,i)=><article className="research-item" key={item.title}><span className="item-number">0{i+1}</span><p className="small-label">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="notice">研究进展待补充：具体研究问题、技术方案与实验验证。</div></div></>}
