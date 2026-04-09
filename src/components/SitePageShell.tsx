import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type SitePageShellProps = {
  children: React.ReactNode;
};

export function SitePageShell({ children }: SitePageShellProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-80 h-[320px] w-[320px] rounded-full bg-gradient-to-r from-fuchsia-400/20 to-indigo-400/20 blur-3xl" />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
