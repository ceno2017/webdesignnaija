import Head from "next/head";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function WebDesignLandingPage() {
  return (
    <>
      <Head>
        <title>
          Professional Web Designer for Hire | Modern SEO‑Optimized Websites
        </title>
        <meta
          name="description"
          content="Hire a professional web designer for modern, fast, SEO‑optimized websites. I design business websites, landing pages, and web apps that convert visitors into clients."
        />
        <meta
          name="keywords"
          content="web designer for hire, web design services in Nigeria, SEO web design, Next.js developer"
        />
        <meta name="author" content="Charles Eno" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

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
                name: "Landing Pages",
                desc: "Get landing pages that with strong messaging, and SEO best practices to help you businesses over the line.",
              },
              {
                name: "Business Websites",
                desc: "Clean design, strong messaging, and SEO best practices to help you rank and convert.",
              },
              {
                name: "Web Apps & Dashboards",
                desc: "School management systems complete with result management, fee management with payment portal.",
              },
              {
                name: "Enterprise Applications for companies",
                desc: "We listen to your company's needs and then build enterprise applications for your company's internal workings that enhances efficiency",
              },
              {
                name: "SEO enhancements for existing sites",
                desc: "For pre-existing websites we can help improve search engine rankings for your business by doing some work on your site.",
              },
              {
                name: "React/Next.js Apps",
                desc: "We specialize in React and Next.js apps, Supabase for database, Auth.js for authentication and authorization and payments with stripe.",
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
      <section className="py-24 bg-[#4750DD] text-white text-center">
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
