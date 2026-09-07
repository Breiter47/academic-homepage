import Link from "next/link";
export default function NotFound(){return <div className="page-body"><div className="page-heading"><p className="eyebrow">404 / Page not found</p><h1>页面未找到</h1><p>该页面可能已移动，或链接地址有误。</p></div><Link className="button primary" href="/">返回首页 →</Link></div>}
