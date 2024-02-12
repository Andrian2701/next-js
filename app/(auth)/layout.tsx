import { Roboto } from "next/font/google";

import "../../styles/boilerplate.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--var-roboto",
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
