import { Link } from "@tanstack/react-router";
import { EMAIL, GST, INSTAGRAM, PHONE_DISPLAY, TEL, waLink } from "@/lib/whatsapp";
import { LEGAL_LINKS, NAV_LINKS, NAV_MORE } from "@/lib/nav";
import { TERMS } from "@/lib/terms";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import WhatsApp from "./icons/WhatsApp";

const social =
  "press flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo-cream.png" alt="" width={44} height={44} className="h-11 w-11" />
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold">Tanish</span>
              <span className="font-display text-xl italic text-accent">Creation</span>
            </div>
          </div>
          <p className="mt-4 font-display italic text-2xl text-secondary text-balance">
            Printing Stories on Every Fabric
          </p>
          <p className="mt-6 text-sm text-primary-foreground/70 max-w-md">
            Jaipur-based premium screen printing manufacturer. Heritage craft, modern scale, trusted
            by boutiques and D2C brands across India.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Tanish Creation on Instagram"
              className={social}
            >
              <Instagram size={18} />
            </a>
            <a
              href={waLink("Hi Tanish Creation!")}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className={social}
            >
              <WhatsApp className="h-[18px] w-[18px]" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email Tanish Creation" className={social}>
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">
            GST: <span className="font-mono text-accent">{GST}</span>
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[...NAV_LINKS.slice(1), ...NAV_MORE].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1 shrink-0" />
              <span>
                <a href={TEL} className="hover:text-accent tabular">
                  {PHONE_DISPLAY}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span className="whitespace-pre-line">
                Ward No. 36, Saipura{"\n"}
                Behind Homeopathic University{"\n"}
                Sanganer, Jaipur (Rajasthan) 302029
              </span>
            </li>
            <li className="text-primary-foreground/60">Visits: {TERMS.visitHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Tanish Creation. All rights reserved.</p>
          <ul className="flex items-center gap-5">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>Crafted in Jaipur • Since {TERMS.since}</p>
        </div>
      </div>
      {/* Reserves exactly the mobile dock's height so nothing ends up hidden beneath it */}
      <div className="border-t border-primary-foreground/10 pb-[var(--dock-space)] md:pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 text-center text-xs text-primary-foreground/50">
          <p>
            Developed by{" "}
            <a
              href="https://wa.me/918595475007?text=Hello%2C%20I%E2%80%99m%20interested%20in%20developing%20a%20website."
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              Yash Marwal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
