// middleware.js

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  // 从请求中提取 token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 请求的 URL
  const { pathname } = request.nextUrl;

  // 保护的路径
  if (
    pathname.startsWith("/TicketPage/new") ||
    pathname.startsWith("/Dashboard") ||
    pathname.startsWith("/UserDashboard")
  ) {
    // 如果没有 token，重定向到登录页面
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url)); // 确保 /login 是你的登录页面
    }

    // 对于 Dashboard 页面，可以进一步检查用户角色
    // if (pathname.startsWith("/Dashboard") && token.role !== "admin") {
    //   // 如果用户角色不是 admin，重定向到访问拒绝页面或其他适当页面
    //   return NextResponse.redirect(new URL("/Home", request.url)); // 确保 /unauthorized 是你的访问拒绝页面
    // }
  }

  return NextResponse.next();
}

// 配置中间件适用的路径
export const config = {
  matcher: ["/TicketPage/new", "/Dashboard/:path*", "/UserDashboard"], // 保护 /ticket/new 和 /Dashboard 路径及其子路径
};
