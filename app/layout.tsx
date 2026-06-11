import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { company, navigation } from "@/lib/site-data";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const title = `${company.name} | Data Science and software engineering portfolio`;
const description =
  "Portfolio website for two Data Science engineering students in Tunisia with projects in web development, AI, analytics, and data engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: title,
    template: `%s | ${company.name}`,
  },
  description,
  keywords: [
    "Data Science portfolio Tunisia",
    "engineering student portfolio",
    "web development portfolio",
    "AI student projects",
    "data analytics dashboards",
    "software engineering Tunisia",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    title,
    description,
    siteName: company.name,
    type: "website",
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${company.name} portfolio cover`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.shortDescription,
    url: "https://portfolio.example.com",
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunisia",
      addressCountry: "TN",
    },
    sameAs: [company.socialLinks.github, company.socialLinks.linkedin],
    areaServed: ["Tunisia", "Europe", "Middle East", "Remote"],
    knowsAbout: [
      "Web development",
      "Artificial intelligence",
      "Data analytics",
      "Data engineering",
      "Software engineering",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen overflow-x-hidden`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var localTheme = null;
                try {
                  localTheme = window.localStorage.getItem("theme");
                } catch (e) {}
                var urlTheme = new URLSearchParams(window.location.search).get("theme");
                var cookieTheme = document.cookie
                  .split("; ")
                  .find(function (item) { return item.indexOf("theme=") === 0; });
                var parsedCookieTheme = cookieTheme ? cookieTheme.split("=")[1] : null;
                var theme = urlTheme || localTheme || parsedCookieTheme;

                if (theme !== "light" && theme !== "dark") {
                  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                }

                try {
                  window.localStorage.setItem("theme", theme);
                } catch (e) {}
                document.cookie = "theme=" + theme + "; path=/; max-age=31536000; samesite=lax";
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.dataset.theme = theme;
                document.documentElement.style.colorScheme = theme;

                if (urlTheme === "light" || urlTheme === "dark") {
                  var currentUrl = new URL(window.location.href);
                  currentUrl.searchParams.delete("theme");
                  window.history.replaceState({}, "", currentUrl.toString());
                }
              } catch (error) {
                document.documentElement.classList.add("dark");
                document.documentElement.dataset.theme = "dark";
                document.documentElement.style.colorScheme = "dark";
              }
            })();
          `}
        </Script>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader navigation={navigation} />
            <main className="flex-1">{children}</main>
            <SiteFooter navigation={navigation} />
          </div>
        </ThemeProvider>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
