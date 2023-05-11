import GlobalStyle from "@/lib/globalstyle";
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SK Sunny",
  description: "우리마을리빙랩",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <html lang="ko">
        <body className={inter.className}>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
