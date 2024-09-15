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
                className="font-waheed mt-1 rounded-full bg-[#1d8979] flex items-center justify-center lg:h-[41px] h-[36px] lg:text-[18px] text-[14px] text-white lg:px-6 px-4"
              >
                ޝަކުވާ ހުށަހެޅުއްވުން
              </Link>
            </div>
          </div>
        </nav>
        <MobileNav navLinks={navLinks} />
        <main className="w-full">{children}</main>
        <footer className="w-full bg-[#F6F3F6C9] border-t-[10px] border-[#F0EFF2]">
          <div className="container px-6 lg:flex mx-auto rtl gap-12 py-12 justify-between">
            <div className="flex items-start">
              <div className="flex gap-3 items-center">
                <img
                  src="/images/kudhahuvadhoocouncillogo.png"
                  className="h-8 w-8 mr-2"
                />
                <h2 className="font-waheed text-[28px]">
                  ނިލަންދެ އަތޮޅު ކުޑަހުވަދޫ ކައުންސިލް އިދާރާ
                </h2>
              </div>
            </div>
            <div className="flex gap-12 justify-between lg:mt-0 mt-12">
              <ul className="grid w-full lg:w-[600px] grid-cols-2 lg:grid-cols-3">
                {footerLinks.map((link, index) => {
                  return (
                    <li className="mb-2 px-3" key={index}>
                      <Link
                        className="font-rasmee text-[16px] hover:text-[#1d8979] text-[#6F646F]"
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
            <p className="font-lato text-[#0D0D0D26] text-center text-md">
              &copy; All Rights Reserved {moment().format("yyyy")} Secretariat
              of Dh.Kudahuvadhoo Council
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
