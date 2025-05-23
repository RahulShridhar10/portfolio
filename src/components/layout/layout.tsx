import { ReactNode, useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ScrollToTop } from "@/components/scroll-to-top";

interface LayoutProps {
  children: ReactNode;
  currentSection?: string;
}

export function Layout({ children, currentSection = "home" }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile (don't show custom cursor on mobile)
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isMobileDevice || window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen flex flex-col">
        <Header activeSection={currentSection} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>

      {/* Show custom cursor only on desktop */}
      {!isMobile && <CustomCursor />}

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Scroll to top button */}
      <ScrollToTop />

      <Toaster />

      {/* Hide default cursor on desktop */}
      {!isMobile && (
        <style jsx global>{`
          body {
            cursor: none !important;
          }

          a, button, [role="button"],
          input[type="submit"], input[type="button"] {
            cursor: none !important;
          }
        `}</style>
      )}
    </ThemeProvider>
  );
}
