import "../globals.css";

export const metadata = {
  title: "Atholhu CMS",
  description: "An interactive CMS for Island & Atoll councils",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
