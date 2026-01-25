import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Our Portfolio",
};

export default async function WebDesignLandingPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0);

  return (
    <>
      <Head>
        <title>Professional Web Designer for Hire | Our Portfolio</title>
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

      {/* Hero Section */}
      <section className="min-h-screen bg-linear-to-br from-sky-600 to-blue-500 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome <br />
              <span className="text-emerald-400">{firstName}...</span> What can
              we do for you?
            </h1>
            <p className="mt-6 text-lg text-[#0C287B]">
              We help startups, businesses, and entrepreneurs stand out online
              with fast, mobile‑friendly, SEO‑optimized websites built using
              modern technologies like <strong>Next.js</strong>.
            </p>
            <div className="mt-8 flex gap-4">
              <Button className="rounded-2xl px-8 py-6 text-lg">Hire Me</Button>
              <Button
                variant="secondary"
                className="rounded-2xl px-8 py-6 text-lg"
              >
                See Portfolio below
              </Button>
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
          <h2 className="text-3xl font-bold text-center">Some of our jobs</h2>
          <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
            Everything you need to turn visitors into paying clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Jeftech Ltd",
                desc: "JEFTECH LTD has a razor-like focus on goals & sustainability: Ensuring every team member understands their contribution to organizational growth while leveraging technology and responsible practices for sustainable operations.",
                link: "https://jeftechltd.com",
              },
              {
                name: "Citadel Mud School",
                desc: "We built this site for Citadel Mud School, and enabled students to sign in, sign out, fill out enrolment forms, and make payments for courses.Citadel provides ilfield Training Services, Leadership and Management Development Academy, Mud Engineering Technical Consulting,",
                link: "https://citadelmudschool.com",
              },
              {
                name: "DAS Logistics",
                desc: "DAS Logistics is a premier provider of Integrated Logistics and supply chain solutions.DAS provides Proven expertise in Logistics and Supply Chain management, Our robust transportation solution especially in the marine sector ensure",
                link: "https://daslogisticschain.com/",
              },
            ].map((service) => (
              <Card key={service.name} className="rounded-2xl shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-slate-600">
                    {service.desc}
                    <br />

                    <Link
                      href={service.link}
                      className="flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-slate-700 hover:shadow-lg"
                      target="_blank"
                    >
                      {service.name}
                    </Link>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#24D29B] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Get More Clients?
        </h2>
        <p className="mt-4 text-[#094542]">
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
      <footer className="py-8 text-center text-[#E6E6E6] bg-[#041C4D]">
        © {new Date().getFullYear()} Webplan Software Development Ltd — Web
        Designer, Hospital and School Management Systems & Next.js Developer
      </footer>
    </>
  );
}
