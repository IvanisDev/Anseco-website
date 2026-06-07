"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, Search, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnsecoCrest } from "@/components/anseco-crest";
import { siteConfig } from "@/config/site";

type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Headmaster Message", href: "/about#headmaster-message" },
      { label: "History", href: "/about#history" },
      { label: "Motto & Values", href: "/about#values" },
      { label: "School Anthem", href: "/about#school-anthem" },
      { label: "Management Team", href: "/about#management" },
      { label: "Board of Directors", href: "/about#board" }
    ]
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Overview", href: "/admissions#admission-overview" },
      { label: "How to Join", href: "/admissions#how-to-apply" },
      { label: "Programmes", href: "/admissions#programmes" },
      { label: "Requirements", href: "/admissions#requirements" },
      { label: "Downloads", href: "/admissions#downloads" },
      { label: "FAQs", href: "/admissions#faqs" },
      { label: "Contact Office", href: "/admissions#admissions-contact" }
    ]
  },
  {
    label: "Academics",
    href: "/programmes",
    children: [
      {
        label: "Departments",
        href: "/programmes",
        children: [
          { label: "General Arts", href: "/programmes/general-arts" },
          { label: "General Science", href: "/programmes/general-science" },
          { label: "Business", href: "/programmes/business" },
          { label: "Agricultural Science", href: "/programmes/agricultural-science" },
          { label: "Home Economics", href: "/programmes/home-economics" },
          { label: "Visual Arts", href: "/programmes/visual-arts" }
        ]
      },
      {
        label: "Resources",
        href: "/resources",
        children: [
          { label: "Library", href: "/resources#library" },
          { label: "Dining Hall", href: "/resources#dining" },
          { label: "Labs", href: "/resources#labs" },
          { label: "Campus Tour", href: "/resources#campus-tour" }
        ]
      }
    ]
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "Latest News", href: "/news" },
      { label: "Events Calendar", href: "/events" }
    ]
  },
  {
    label: "Student Life",
    href: "/school-life",
    children: [
      { label: "Sports & Athletics", href: "/school-life#sports" },
      { label: "Clubs & Societies", href: "/school-life#clubs" },
      { label: "Boarding Life", href: "/school-life#boarding" },
      { label: "School Houses", href: "/school-life#houses" },
      { label: "Student Government", href: "/school-life#student-government" },
      { label: "Community Building", href: "/school-life#community" }
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact Us", href: "/contact" }
];

const searchItems = [
  { label: "About ANSECO", href: "/about", description: "History, mission, values and leadership" },
  { label: "Admissions", href: "/admissions", description: "Application steps, requirements, FAQs and downloads" },
  { label: "Academics", href: "/programmes", description: "Academic pathways offered at ANSECO" },
  { label: "Departments", href: "/programmes", description: "Academic departments and programmes" },
  { label: "General Arts", href: "/programmes/general-arts", description: "Programme details and sample subjects" },
  { label: "General Science", href: "/programmes/general-science", description: "Programme details and sample subjects" },
  { label: "Business", href: "/programmes/business", description: "Programme details and sample subjects" },
  { label: "Agricultural Science", href: "/programmes/agricultural-science", description: "Programme details and sample subjects" },
  { label: "Home Economics", href: "/programmes/home-economics", description: "Programme details and sample subjects" },
  { label: "Visual Arts", href: "/programmes/visual-arts", description: "Programme details and sample subjects" },
  { label: "News & Updates", href: "/news", description: "Latest school notices and announcements" },
  { label: "Events Calendar", href: "/events", description: "Upcoming school dates and activities" },
  { label: "Student Life", href: "/school-life", description: "Sports, clubs, boarding and student leadership" },
  { label: "Resources", href: "/resources", description: "Library, labs, dining hall and campus facilities" },
  { label: "Gallery", href: "/gallery", description: "School photo albums" },
  { label: "Alumni", href: "/alumni", description: "Old students contact and support" },
  { label: "Contact", href: "/contact", description: "Phone, email and directions" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = normalizedQuery
    ? searchItems.filter((item) => `${item.label} ${item.description}`.toLowerCase().includes(normalizedQuery)).slice(0, 7)
    : [];

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, []);

  const closeNavigation = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    setMobileExpanded(null);
    setMobileSubExpanded(null);
    closeSearch();
  }, [closeSearch]);

  const handleNavLinkClick = useCallback((event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const [hrefPath, hash] = href.split("#");
    const currentPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
    const targetPath = hrefPath.endsWith("/") && hrefPath !== "/" ? hrefPath.slice(0, -1) : hrefPath;

    if (hash && targetPath === currentPath) {
      const target = document.getElementById(hash);
      if (target) {
        event.preventDefault();
        window.history.pushState(null, "", href);
        closeNavigation();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [closeNavigation, pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current?.contains(event.target as Node)) return;
      closeNavigation();
    }

    function handleScroll() {
      closeNavigation();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen, closeNavigation]);

  useEffect(() => {
    if (!searchOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (searchRef.current?.contains(event.target as Node)) return;
      closeSearch();
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [searchOpen, closeSearch]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b-4 border-[#C9990A] bg-[#061a43] text-white shadow-[0_18px_40px_rgba(6,26,67,0.24)]">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-4 hover:opacity-90" onClick={() => setMobileOpen(false)}>
            <AnsecoCrest className="h-14 w-14" />
            <div>
              <div className="text-sm font-black uppercase leading-tight tracking-[0.12em]">ANLO SENIOR HIGH SCHOOL</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9990A]">{siteConfig.motto}</div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <nav className="flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => { if (link.children) setOpenDropdown(link.label); setOpenSubDropdown(null); }}
                  onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors ${pathname === link.href || pathname.startsWith(`${link.href}/`) ? "bg-[#C9990A] text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                  >
                    {link.label}
                    {link.children ? <ChevronDown size={13} /> : null}
                  </Link>
                  {link.children && openDropdown === link.label ? (
                    <div className="absolute left-0 top-full z-50 min-w-[240px] border-t-4 border-[#C9990A] bg-white py-2 text-[#1A1A2E] shadow-[0_24px_60px_rgba(6,26,67,0.18)]">
                      {link.children.map((child) => (
                        <div key={child.label} className="relative" onMouseEnter={() => child.children && setOpenSubDropdown(child.label)}>
                          <Link href={child.href} className="flex items-center justify-between px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#EDF1F9] hover:text-[#0D2E6B]" onClick={(event) => handleNavLinkClick(event, child.href)}>
                            {child.label}
                            {child.children ? <ChevronRight size={13} className="text-gray-400" /> : null}
                          </Link>
                          {child.children && openSubDropdown === child.label ? (
                            <div className="absolute left-full top-0 z-50 min-w-[190px] border-t-4 border-[#C9990A] bg-white py-2 shadow-xl">
                              {child.children.map((sub) => (
                                <Link key={sub.label} href={sub.href} className="block px-5 py-3 text-sm font-semibold hover:bg-[#EDF1F9] hover:text-[#0D2E6B]" onClick={(event) => handleNavLinkClick(event, sub.href)}>{sub.label}</Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            <div ref={searchRef} className="relative">
              <button
                type="button"
                aria-label="Search site"
                aria-expanded={searchOpen}
                className="p-2.5 text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95"
                onClick={() => {
                  if (searchOpen) {
                    closeSearch();
                  } else {
                    setSearchQuery("");
                    setSearchOpen(true);
                  }
                  setOpenDropdown(null);
                  setOpenSubDropdown(null);
                }}
              >
                <Search size={19} />
              </button>
              {searchOpen ? (
                <div className="absolute right-0 top-14 z-50 w-80 animate-in fade-in-0 slide-in-from-top-2 duration-200 bg-white p-3 text-[#1A1A2E] shadow-2xl">
                  <label className="sr-only" htmlFor="site-search">Search ANSECO</label>
                  <div className="flex items-center gap-2 px-2 py-2">
                    <Search size={16} className="text-gray-400" />
                    <input
                      id="site-search"
                      autoFocus
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") closeSearch();
                        if (event.key === "Enter" && searchResults[0]) window.location.href = searchResults[0].href;
                      }}
                      placeholder="Search pages..."
                      className="w-full bg-transparent text-sm outline-none ring-0 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                    />
                  </div>
                  {normalizedQuery ? (
                    <div className="mt-3 max-h-80 overflow-y-auto">
                      {searchResults.length > 0 ? (
                      searchResults.map((item) => (
                        <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[#EDF1F9]" onClick={closeNavigation}>
                          <span className="block text-sm font-bold text-[#0D2E6B]">{item.label}</span>
                          <span className="block text-xs leading-relaxed text-gray-500">{item.description}</span>
                        </Link>
                      ))
                      ) : (
                        <p className="px-3 py-5 text-sm text-gray-500">No matching pages found.</p>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>

          <button
            className="rounded-md p-2 transition-all duration-200 hover:bg-white/10 active:scale-95 lg:hidden"
            type="button"
            aria-label="Toggle menu"
            onClick={() => {
              if (mobileOpen) {
                closeNavigation();
              } else {
                setMobileOpen(true);
              }
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#0D2E6B] pb-4 lg:hidden">
          <div className="px-6 py-4">
            <label className="sr-only" htmlFor="mobile-site-search">Search ANSECO</label>
            <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2">
              <Search size={16} className="text-[#C9990A]" />
              <input
                id="mobile-site-search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search pages..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
              />
            </div>
            {searchQuery.trim() ? (
              <div className="mt-2 overflow-hidden rounded-lg bg-[#091d47]">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-xs text-white/75 hover:bg-white/10" onClick={closeNavigation}>
                      <span className="block font-semibold text-white">{item.label}</span>
                      <span>{item.description}</span>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-3 text-xs text-white/60">No matching pages found.</p>
                )}
              </div>
            ) : null}
          </div>
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <button className="flex w-full items-center justify-between px-6 py-3 text-left text-sm font-medium text-white/90 hover:bg-white/10" onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}>
                  {link.label}
                  <ChevronDown size={14} className={mobileExpanded === link.label ? "rotate-180" : ""} />
                </button>
              ) : (
                <Link href={link.href} className="block px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10" onClick={(event) => {
                  handleNavLinkClick(event, link.href);
                  setMobileOpen(false);
                }}>{link.label}</Link>
              )}
              {link.children && mobileExpanded === link.label ? (
                <div className="bg-[#091d47]">
                  {link.children.map((child) => (
                    <div key={child.label}>
                      {child.children ? (
                        <button className="flex w-full items-center justify-between px-10 py-2.5 text-left text-xs text-white/70 hover:bg-white/10" onClick={() => setMobileSubExpanded(mobileSubExpanded === child.label ? null : child.label)}>
                          {child.label}
                          <ChevronDown size={12} className={mobileSubExpanded === child.label ? "rotate-180" : ""} />
                        </button>
                      ) : (
                        <Link href={child.href} className="block px-10 py-2.5 text-xs text-white/70 hover:bg-white/10" onClick={(event) => {
                          handleNavLinkClick(event, child.href);
                          setMobileOpen(false);
                        }}>{child.label}</Link>
                      )}
                      {child.children && mobileSubExpanded === child.label ? (
                        <div className="bg-[#071530]">
                          {child.children.map((sub) => (
                            <Link key={sub.label} href={sub.href} className="block px-14 py-2 text-xs text-white/60 hover:bg-white/10" onClick={(event) => {
                              handleNavLinkClick(event, sub.href);
                              setMobileOpen(false);
                            }}>{sub.label}</Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
