import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "minhtrifit | Create Blog",
  description: "Generated by minhtrifit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}