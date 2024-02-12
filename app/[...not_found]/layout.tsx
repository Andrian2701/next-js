import { Roboto } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/layouts/Header";
import "../../styles/boilerplate.scss";

export const metadata: Metadata = {
  title: "404",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--var-roboto",
});

export default function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
