import Nav from "@/components/Nav";
import GlobalStyle from "@/lib/globalstyle";
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SUNNY BRAILLE",
  description:
    "Sunny Braille은 해바라기팀이 개발한 교육용 웹 점역 소프트웨어 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
