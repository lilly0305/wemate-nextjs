import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "WEMATE | 위메이트",
  description: "자산 관리 공유 앱",
};

const MyLocalFont = localFont({
  // 아래와 같이 굵기 별로 폰트를 지정해 사용할 수 있다.
  src: [
    {
      path: "../../public/fonts/pretendard/Pretendard-Thin.woff",
      weight: "100"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-ExtraLight.woff",
      weight: "200"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Light.woff",
      weight: "300"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Regular.woff",
      weight: "400"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Medium.woff",
      weight: "500"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-SemiBold.woff",
      weight: "600"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Bold.woff",
      weight: "700"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-ExtraBold.woff",
      weight: "800"
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Black.woff",
      weight: "900"
    },
  ],
  variable: '--font-pretendard',
  preload: true,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={MyLocalFont.className}>
        {children}
      </body>
    </html>
  );
}
