import Link from "next/link";
export function PageHeading({number, english, title, description}: {number:string;english:string;title:string;description:string}) {
  return <div className="page-heading"><p className="eyebrow">{number} / {english}</p><h1>{title}</h1><p className="lead">{description}</p></div>;
}
export function EmptyState({title, description}: {title:string;description:string}) {
  return <div className="empty-state"><span className="status">待补充</span><h3>{title}</h3><p>{description}</p></div>;
}
export function SectionTitle({english,title,href}: {english:string;title:string;href?:string}) {
  return <div className="section-heading"><div><p className="eyebrow">{english}</p><h2>{title}</h2></div>{href && <Link className="text-link" href={href}>查看全部 <span aria-hidden="true">↗</span></Link>}</div>;
}
