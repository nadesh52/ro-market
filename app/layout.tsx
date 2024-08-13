import "@/styles/globals.css";

export const metadata = {
  title: "NFT Marketplace",
  description: "Generated by Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white max-w-screen-xl mx-auto">{children}</body>
    </html>
  );
}
