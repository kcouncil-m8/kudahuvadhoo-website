import Link from "next/link";
import "../globals.css";
import moment from "moment";
import MobileNav from "./components/mobile-nav";
import MainNav from "./components/main-nav";

export const metadata = {
  title: "Dh.Kudahuvadhoo Council",
  description:
    "Welcome to the Dh.Kudahuvadhoo Council, your source for local governance and community services.",
  keywords:
    "Dh.Kudahuvadhoo, Council, local governance, community services, Maldives",
  author: "Dh.Kudahuvadhoo Council Team",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Dh.Kudahuvadhoo Council",
    description:
      "Welcome to the Dh.Kudahuvadhoo Council, your source for local governance and community services.",
    images: [
      {
        url: "/images/ogimage.png", // Replace with the actual path to your OG image
        width: 1200,
        height: 630,
        alt: "Dh.Kudahuvadhoo Council",
      },
    ],
    siteName: "Dh.Kudahuvadhoo Council",
  },
};

export default function RootLayout({ children }) {
  const navLinks = [
    { name: "ކުޑަހުވަދޫ", link: "/kudahuvadhoo" },
    {
      name: "ކައުންސިލް",
      link: "/council",
      links: [
        { name: "މެންބަރުން", link: "/members/member" },
        { name: "ސީނިއާރ މެނޭޖްމެންޓް ޓީމް", link: "/members/senior" },
        { name: "ޤަވާއިދާއި އުސޫލުތައް", link: "/documents/rules" },
        {
          name: "އަންހެނުންގެ ތަރައްޤީއަށް ކުރިއަރުވާ ކޮމިޓީ",
          link: "/members/woment-development-committee",
        },
        { name: "ޕަބްލިކޭޝަންސް", link: "/documents/publications" },
        { name: "ޕްރޮޖެކްޓްސް", link: "/projects" },
      ],
    },
    { name: "ޚިދުމަތްތައް", link: "/services" },
    { name: "މީޑިއާ ސެންޓަރ", link: "/blog" },
    { name: "ފޯމުތައް", link: "/documents/forms" },
    { name: "ގުޅުއްވުމަށް", link: "/contact" },
  ];

  const footerLinks = [
    { name: "ކުޑަހުވަދޫ", link: "/kudahuvadhoo" },
    { name: "ކައުންސިލް", link: "/council" },
    { name: "ޚިދުމަތްތައް", link: "/services" },
    { name: "މީޑިއާ ސެންޓަރ", link: "/blog" },
    { name: "ގުޅުއްވުމަށް", link: "/contact" },
    { name: "ފޯމުތައް", link: "/documents/forms" },
    { name: "ޤަވާއިދާއި އުސޫލުތައް", link: "/documents/rules" },
    { name: "ސީނިއާރ މެނޭޖްމެންޓް ", link: "/members/senior" },
    { name: "ޕަބްލިކޭޝަންސް", link: "/documents/publications" },
    { name: "ޕްރޮޖެކްޓްސް", link: "/projects" },
  ];

  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="w-full bg-[#F5F9FFF0] lg:h-[100px] h-[80px] xl:flex hidden items-center justify-between rtl">
          <div className="container mx-auto flex items-center justify-between px-6 gap-4">
            <div className="flex items-center justify-center lg:gap-12 gap-6">
              <div className="xl:w-0 w-[1px] h-[41px] bg-[#E2D9E2] bg-opacity-50"></div>
              <Link href="/">
                <div className="flex gap-6 items-center">
                  <img
                    src="/images/kudhahuvadhoocouncillogo.png"
                    className="h-[46px]"
                  />
                  <div className="text-[#0D0D0D]">
                    <p className="font-waheed lg:text-[18px] text-[16px]">
                      ނިލަންދެއަތޮޅު ދެކުނުބުރި
                    </p>
                    <p className="font-waheed lg:text-[18px] text-[16px]">
                      ކުޑަހުވަދޫ ކައުންސިލް އިދާރާ
                    </p>
                  </div>
                </div>
              </Link>
              <div className="xl:w-[1px] w-0 h-[41px] bg-[#E2D9E2] bg-opacity-50"></div>
              <div className="xl:not-sr-only sr-only">
                <MainNav navLinks={navLinks} />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Link
                href="/contact"
                className="font-waheed mt-1 rounded-full bg-[#CF7457] flex items-center gap-2 justify-center lg:h-[41px] h-[36px] lg:text-[18px] text-[14px] text-white lg:px-4 px-4"
              >
                <p>ޝަކުވާ ހުށަހެޅުއްވުން</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
        <MobileNav navLinks={navLinks} />
        <main className="w-full">{children}</main>
        <footer className="w-full bg-[#F6F3F6C9] border-t-[10px] border-[#F0EFF2]">
          <div className="container px-6 lg:flex mx-auto rtl gap-12 py-12 justify-between">
            <div className="flex flex-col gap-4 justify-end lg:justify-end items-start">
              <div className="w-full flex lg:flex-row flex-col gap-6 xl:items-center items-center">
                <img
                  src="/images/kudhahuvadhoocouncillogo.png"
                  className="h-12 w-12"
                />
                <div>
                  <h2 className="font-waheed text-[28px]">
                    ނިލަންދެއަތޮޅު ދެކުނުބުރި
                  </h2>
                  <h2 className="font-waheed text-[28px]">
                    ކުޑަހުވަދޫ ކައުންސިލް އިދާރާ
                  </h2>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex lg:justify-start justify-center gap-4 mt-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-[#3b5998]"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-[#1DA1F2]"
                    >
                      <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.694.863 3.188 2.175 4.065-.803-.026-1.56-.247-2.22-.616v.062c0 2.364 1.684 4.337 3.918 4.782-.41.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-[#E1306C]"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.012 7.052.07 5.773.128 4.548.334 3.5 1.382 2.452 2.43 2.246 3.655 2.188 4.934.012 8.332 0 8.756 0 12s.012 3.668.07 4.948c.058 1.279.264 2.504 1.312 3.552 1.048 1.048 2.273 1.254 3.552 1.312 1.28.058 1.704.07 4.948.07s3.668-.012 4.948-.07c1.279-.058 2.504-.264 3.552-1.312 1.048-1.048 1.254-2.273 1.312-3.552.058-1.28.07-1.704.07-4.948s-.012-3.668-.07-4.948c-.058-1.279-.264-2.504-1.312-3.552-1.048-1.048-2.273-1.254-3.552-1.312-1.28-.058-1.704-.07-4.948-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-12 justify-between lg:mt-0 mt-12">
              <ul className="grid w-full lg:w-[600px] grid-cols-2 lg:grid-cols-4">
                {footerLinks.map((link, index) => {
                  return (
                    <li
                      className="mb-2 px-3 text-center lg:text-right"
                      key={index}
                    >
                      <Link
                        className="font-rasmee text-[16px] hover:text-[#CF7457] text-[#6F646F]"
                        href={link.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </footer>
        <div className="w-full bg-gray-200 py-4 text-gray-600">
          <div className="px-6 mx-auto container">
            <p className="font-lato text-[#000000]/40 text-center text-md">
              &copy; All Rights Reserved {moment().format("yyyy")} Secretariat
              of Dh.Kudahuvadhoo Council
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
