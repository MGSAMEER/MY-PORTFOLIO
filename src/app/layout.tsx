import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'

export const metadata = {
  title: "Sameer Kanade",
  description:
    "Full Stack Developer portfolio showcasing AI-powered, scalable, and impactful digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}