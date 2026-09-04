import "./globals.css";

export const metadata = {
  title: "EscarlateFinder",
  description: "Sistema de prospecção e gestão de leads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
