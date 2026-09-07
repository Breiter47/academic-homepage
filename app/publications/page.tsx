import { publications } from "@/content/profile";
import { EmptyState, PageHeading } from "@/components/ui";
export const metadata = {title:"Publications · 科研成果"};
export default function Publications(){return <><PageHeading number="03" english="Publications" title="科研成果" description="论文、专利与其他公开成果。"/><div className="page-body">{publications.length ? publications.map((item,i)=><article className="record" key={i}><p className="eyebrow">{item.kind}{item.year ? ` · ${item.year}` : ""}</p><h3>{item.title}</h3><p>{item.authors}</p><p>{item.venue}</p>{item.url && <a href={item.url}>查看成果 ↗</a>}</article>) : <EmptyState title="暂未添加科研成果" description="条目将包含成果名称、作者、发表年份、期刊或成果类型，以及可公开访问的链接。"/>}</div></>}
