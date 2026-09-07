"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const navigation = [
  ["/", "Home"], ["/about", "About"], ["/research", "Research"],
  ["/publications", "Publications"], ["/projects", "Projects"],
  ["/cv", "CV"], ["/documents", "Documents"],
];
export default function Navigation() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="个人学术主页首页"><span className="brand-mark">M<span>·</span>E</span><span>个人学术主页<small>ACADEMIC PROFILE</small></span></Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "关闭菜单 −" : "导航菜单 +"}</button>
    <nav id="main-navigation" className={open ? "navigation open" : "navigation"} aria-label="主导航">{navigation.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
  </div></header>;
}
