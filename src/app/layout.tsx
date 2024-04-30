import "./globals.css";
import MantineWrapper from "@lib/mantine-wrapper";

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return(
    <html> 
      <head>
          <title>
              Frieren's Beyond Journy End
          </title>
          <meta>

          </meta>
      </head>
      <body>
        <MantineWrapper>{children}</MantineWrapper>
      </body>
    </html>
  )
}