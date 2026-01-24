import Head from "next/head";
import Link from "next/link";

//import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Web design in Port Harcourt, SEO in Port Harcourt",
  description:
    "We focus on our client's satisd=faction as rfegards web design and web app development in Port Harcourt",
  keywords:
    "website design Port Harcourt,web design company Port Harcourt,website developers in Port Harcourt,affordable web design Port Harcourt,ecommerce website design Port Harcourt,responsive web design Port Harcourt,professional website design Port Harcourt,best web design agency Port Harcourt,business website design Port Harcourt",
};

export default function WebDesignLandingPage() {
  return (
    <>
      <Head>
        <title>
          Professional Web Designer for Hire in Port Harcourt| Modern
          SEO‑Optimized Websites in Port Harcourt
        </title>
        <meta
          name="description"
          content="Hire a professional web designer for modern, fast, SEO‑optimized websites in Port Harcourt. I design business websites, landing pages, and web apps that convert visitors into clients in Port Harcourt."
        />
        <meta
          name="keywords"
          content="web designer for hire in Port Harcourt, web design services in Port Harcourt, SEO web design, Next.js developer"
        />
        <meta name="author" content="Charles Eno" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen bg-linear-to-br from-sky-600 to-blue-500 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Build <span className="text-emerald-400">High‑Converting</span>{" "}
              Websites in Port Harcourt
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              We help startups, businesses, and entrepreneurs in Port Harcourt
              and River state of Nigeria stand out online with fast,
              mobile‑friendly, SEO‑optimized websites built using modern
              technologies like <strong>Next.js</strong>.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="https://wa.me/2347012585759?text=Hello%20Charles,%20I%20would%20like%20to%20hire%20you%20for%20a%20web%20design%20project."
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-[#072684] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-slate-700 hover:shadow-lg"
              >
                Hire us by reaching us on WhatsApp
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-slate-700 hover:shadow-lg"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div>
            <Card className="rounded-2xl bg-white/5 border-white/10">
              <CardContent className="p-8 space-y-4">
                {[
                  "SEO‑friendly structure",
                  "Fast loading & Core Web Vitals",
                  "Mobile‑first design",
                  "Clear call‑to‑action",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Web Design Services
          </h2>
          <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
            Everything you need to turn visitors into paying clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Landing Pages in PH",
                desc: "Get landing pages that with strong messaging, and SEO best practices to help you businesses over the line.",
              },
              {
                name: "Business Websites in PH",
                desc: "Clean design, strong messaging, and SEO best practices to help you rank and convert.",
              },
              {
                name: "Web Apps & Dashboards in PH",
                desc: "School management systems complete with result management, fee management with payment portal.",
              },
              {
                name: "Enterprise Applications for companies in PH",
                desc: "We listen to your company's needs and then build enterprise applications for your company's internal workings that enhances efficiency",
              },
              {
                name: "SEO enhancements for existing sites in PH",
                desc: "For pre-existing websites we can help improve search engine rankings for your business by doing some work on your site.",
              },
            ].map((service) => (
              <Card key={service.name} className="rounded-2xl shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Get More Clients?
        </h2>
        <p className="mt-4 text-slate-300">
          Let’s build a website that works for your business.
        </p>
        <div className="mt-8">
          <Link
            href="https://wa.me/2347012585759?text=Hello%20Charles,%20I%20would%20like%20to%20hire%20you%20for%20a%20web%20design%20project."
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-[#072684] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-slate-700 hover:shadow-lg"
          >
            Hire us by reaching us on WhatsApp
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 bg-black">
        © {new Date().getFullYear()} Webplan Software Development Ltd — Web
        Designer, Hospital and School Management Systems & Next.js Developer
      </footer>
    </>
  );
}
