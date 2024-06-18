import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EmojiProvider } from "@/context/EmojiContext";
import { MessageProvider } from "@/context/MessageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chat box ",
  description: "twitter message box",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MessageProvider>
        <EmojiProvider>
          <body className={inter.className}>{children}</body>
        </EmojiProvider>
      </MessageProvider>
    </html>
  );
}
