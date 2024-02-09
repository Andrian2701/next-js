import { Roboto } from "next/font/google";

import Header from "@/components/layouts/Header";
import "./../styles/boilerplate.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--var-roboto",
});

export default function RootLayout({
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
