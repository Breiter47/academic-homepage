import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { profile } from "@/content/profile";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: `${profile.name} | 个人学术主页`, template: `%s | ${profile.name}` },
  description: profile.bio,
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="zh-CN"><body><a className="skip-link" href="#main">跳转到正文</a><Navigation/><main id="main" className="container">{children}</main><footer className="site-footer"><div><strong>{profile.name}</strong><p>燕山大学 · 机械工程学院</p></div><div className="footer-right"><p>个人学术主页 / Academic Profile</p><Link href="/documents">公开文档 ↗</Link></div></footer></body></html>;
}
