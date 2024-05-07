import Navbar from "@/components/Navbar";
import "./globals.css";
import MantineWrapper from "@lib/mantine-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Frieren&apos;s Beyond Journy End</title>
        <meta></meta>
      </head>
      <body>
        <Navbar />
        <main className="">
          <MantineWrapper>{children}</MantineWrapper>
        </main>
      </body>
    </html>
  );
}
