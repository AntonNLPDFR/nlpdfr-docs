import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NLPDFR Handboek",
  authors: [{ name: 'Anton' }, { name: 'NLPDFR', url: 'https://nlpdfr.nl/' }],
  metadataBase: new URL("https://nlpdfr-docs.vercel.app/"),
  description:
    "De gehele NLPDFR handboek. Alles uitgelegd.",
  openGraph: {
    images: "https://creativecrows.net/wp-content/uploads/2022/01/nlpdfr-logo23.gif",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[85vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
