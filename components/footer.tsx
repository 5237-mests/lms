"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t bg-primary/5">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">{t("common.contactUs")}</h3>
            <address className="mt-2 not-italic text-muted-foreground">
              <p>123 Education Street</p>
              <p>Learning City, LC 12345</p>
              <p className="mt-2">Email: info@lms-school.edu</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">{t("common.quickLinks")}</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/courses" className="text-muted-foreground hover:text-primary">
                {t("navigation.courses")}
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary">
                FAQ
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                {t("common.contactUs")}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">{t("common.legal")}</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t("common.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

