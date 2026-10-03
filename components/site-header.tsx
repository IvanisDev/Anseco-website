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
  contributesToParentActive?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About ANSECO", href: "/about" },
      { label: "Our History", href: "/about/our-history" },
      { label: "School Administration", href: "/about/school-administration" }
    ]
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions Overview", href: "/admissions" },
      { label: "How to Apply", href: "/admissions/how-to-apply" },
      { label: "Prospectus & Requirements", href: "/admissions/prospectus" },
      { label: "School Regulations", href: "/admissions/student-guidelines" },
      { label: "FQAs", href: "/admissions/faqs" }
    ]
  },
  {
    label: "Academics",
    href: "/learning-areas",
    children: [
      { label: "Learning Areas", href: "/learning-areas#learning-areas" },
      { label: "Facilities & Resources", href: "/resources#educational-resources" },
      { label: "Final-Year Students", href: "/final-year-students" },
      { label: "Academic Calendar", href: "/academic-calendar" }
    ]
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    children: [
      { label: "Student Life", href: "/campus-life" },
      { label: "Clubs & Societies", href: "/campus-life/clubs-societies" },
      { label: "Sports & Athletics", href: "/campus-life/sports-athletics" },
      { label: "Boarding & Day Students", href: "/campus-life/boarding-day-students" },
      { label: "Campus Facilities", href: "/campus-life/facilities" }
    ]
  },
  {
    label: "Media",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" }
    ]
  },
  {
    label: "Alumni",
    href: "/alumni",
    children: [
      { label: "ANSSOSA", href: "/alumni" },
      { label: "Alumni Leadership", href: "/alumni/leadership" },
      { label: "Projects & Impact", href: "/alumni/projects-impact" },
      { label: "Transcript & Records", href: "/alumni/transcript-records" },
      { label: "Get Involved", href: "/alumni/get-involved" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

function hrefPath(href: string) {
  return href.split("#")[0].replace(/\/$/, "") || "/";
}

function pathMatches(href: string, pathname: string) {
  const target = hrefPath(href);
  return target === "/" ? pathname === "/" : pathname === target || pathname.startsWith(`${target}/`);
}

function navLinkIsActive(link: NavLink, pathname: string): boolean {
  return pathMatches(link.href, pathname) || Boolean(link.children?.some((child) => child.contributesToParentActive !== false && navLinkIsActive(child, pathname)));
}

const searchItems = [
  { label: "About ANSECO", href: "/about", description: "History, mission, values and leadership" },
  { label: "Our History", href: "/about/our-history", description: "The history, milestones and former headmasters of ANSECO" },
  { label: "School Administration", href: "/about/school-administration", description: "School management, department heads, house parents and student leaders" },
  { label: "Admissions", href: "/admissions", description: "Application steps, requirements, FAQs and downloads" },
  { label: "How to Apply", href: "/admissions/how-to-apply", description: "Placement, reporting and registration steps" },
  { label: "Admissions Prospectus", href: "/admissions/prospectus", description: "Required documents and approved student items" },
  { label: "School Regulations", href: "/admissions/student-guidelines", description: "Reporting, visiting, dress, health and student conduct guidance" },
  { label: "Admissions FAQs", href: "/admissions/faqs", description: "Common admission questions and answers" },
  { label: "Academics", href: "/learning-areas", description: "Learning areas offered at ANSECO" },
  { label: "Departments", href: "/learning-areas", description: "Academic departments and learning areas" },
  { label: "Heads of Departments", href: "/about/school-administration#heads-of-departments", description: "Academic department leaders at ANSECO" },
  { label: "Final-Year Students & WASSCE", href: "/final-year-students", description: "WASSCE preparation, candidate guidance, examination conduct and next steps" },
  { label: "Academic Calendar", href: "/academic-calendar", description: "Published academic dates and school programmes" },
  { label: "News & Updates", href: "/news", description: "Latest school notices and announcements" },
  { label: "Events Calendar", href: "/events", description: "Upcoming school dates and activities" },
  { label: "Campus Life", href: "/campus-life", description: "Sports, clubs, boarding and student leadership" },
  { label: "Clubs & Societies", href: "/campus-life/clubs-societies", description: "Student clubs, service groups and societies" },
  { label: "Sports & Athletics", href: "/campus-life/sports-athletics", description: "Sporting activities and inter-house participation" },
  { label: "Boarding & Day Students", href: "/campus-life/boarding-day-students", description: "Boarding life, day students and the four ANSECO houses" },
  { label: "Student Conduct & Discipline", href: "/admissions/student-guidelines#student-conduct-discipline", description: "GES offences, sanctions and approved disciplinary guidelines" },
  { label: "Facilities & Resources", href: "/resources", description: "Educational facilities and campus-life resources at ANSECO" },
  { label: "Campus Facilities", href: "/campus-life/facilities", description: "Assembly hall, dining hall, sick bay and sports field" },
  { label: "Gallery", href: "/gallery", description: "School photo albums covering academics, campus life, events and history" },
  { label: "Alumni", href: "/alumni", description: "ANSSOSA contact and support" },
  { label: "Alumni Leadership", href: "/alumni/leadership", description: "ANSSOSA Global and Diaspora executives" },
  { label: "Alumni Projects & Impact", href: "/alumni/projects-impact", description: "Current and completed alumni projects" },
  { label: "Transcript & Records", href: "/alumni/transcript-records", description: "Guidance for academic record requests" },
  { label: "Get Involved", href: "/alumni/get-involved", description: "Reconnect, volunteer, mentor and support ANSECO" },
  { label: "Contact ANSECO", href: "/contact", description: "Current school address and telephone numbers" }
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

    if (targetPath !== currentPath) {
      closeNavigation();
      return;
    }

    event.preventDefault();
    closeNavigation();

    if (hash) {
      window.history.pushState(null, "", href);
      document.getElementById(hash)?.scrollIntoView({ behavior: "auto", block: "start" });
      return;
    }

    window.history.replaceState(null, "", hrefPath || "/");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [closeNavigation, pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current?.contains(event.target as Node)) return;
      closeNavigation();
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
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

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeNavigation();
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeNavigation]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b-4 border-[#C9990A] bg-[#061a43] text-white shadow-[0_18px_40px_rgba(6,26,67,0.24)]">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3 hover:opacity-90 sm:gap-4" onClick={() => setMobileOpen(false)}>
            <AnsecoCrest className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
            <div className="hidden min-[380px]:block">
              <div className="text-sm font-black uppercase leading-tight tracking-[0.12em]">ANLO SENIOR HIGH SCHOOL</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9990A]">{siteConfig.motto}</div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <nav className="flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = navLinkIsActive(link, pathname);
                return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => { if (link.children) setOpenDropdown(link.label); setOpenSubDropdown(null); }}
                  onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}
                  onFocus={() => { if (link.children) setOpenDropdown(link.label); }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenDropdown(null);
                      setOpenSubDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    aria-current={pathMatches(link.href, pathname) ? "page" : undefined}
                    aria-expanded={link.children ? openDropdown === link.label : undefined}
                    aria-controls={link.children ? `desktop-menu-${link.label.toLowerCase().replaceAll(" ", "-")}` : undefined}
                    className={`flex items-center gap-1 rounded-[6px] px-3 py-2 text-sm font-bold transition-colors ${isActive ? "bg-[#C9990A] text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                    onClick={(event) => handleNavLinkClick(event, link.href)}
                  >
                    {link.label}
                    {link.children ? <ChevronDown size={13} /> : null}
                  </Link>
                  {link.children && openDropdown === link.label ? (
                    <div id={`desktop-menu-${link.label.toLowerCase().replaceAll(" ", "-")}`} className="absolute left-0 top-full z-50 min-w-[240px] border-t-4 border-[#C9990A] bg-white py-2 text-[#1A1A2E] shadow-[0_24px_60px_rgba(6,26,67,0.18)]">
                      {link.children.map((child) => (
                        <div key={child.label} className="relative" onMouseEnter={() => child.children && setOpenSubDropdown(child.label)}>
                          <Link href={child.href} aria-current={pathMatches(child.href, pathname) ? "page" : undefined} className={`flex items-center justify-between px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#EDF1F9] hover:text-[#0D2E6B] ${navLinkIsActive(child, pathname) ? "bg-[#EDF1F9] text-[#0D2E6B]" : ""}`} onClick={(event) => handleNavLinkClick(event, child.href)}>
                            {child.label}
                            {child.children ? <ChevronRight size={13} className="text-gray-400" /> : null}
                          </Link>
                          {child.children && openSubDropdown === child.label ? (
                            <div className="absolute left-full top-0 z-50 min-w-[190px] border-t-4 border-[#C9990A] bg-white py-2 shadow-xl">
                              {child.children.map((sub) => (
                                <Link key={sub.label} href={sub.href} aria-current={pathMatches(sub.href, pathname) ? "page" : undefined} className={`block px-5 py-3 text-sm font-semibold hover:bg-[#EDF1F9] hover:text-[#0D2E6B] ${pathMatches(sub.href, pathname) ? "bg-[#EDF1F9] text-[#0D2E6B]" : ""}`} onClick={(event) => handleNavLinkClick(event, sub.href)}>{sub.label}</Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                );
              })}
            </nav>

            <div ref={searchRef} className="relative">
              <button
                type="button"
                aria-label="Search site"
                aria-expanded={searchOpen}
                aria-controls="desktop-site-search"
                className="flex h-11 w-11 items-center justify-center text-white/90 transition-colors hover:bg-white/10 hover:text-white"
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
                <div id="desktop-site-search" role="search" className="absolute right-0 top-14 z-50 w-80 animate-in fade-in-0 slide-in-from-top-2 rounded-[8px] bg-white p-3 text-[#1A1A2E] shadow-2xl duration-200">
                  <label className="sr-only" htmlFor="site-search">Search ANSECO</label>
                  <div className="flex items-center gap-2 rounded-[8px] px-2 py-2">
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
                      placeholder="Keyword search"
                      className="w-full bg-transparent text-sm outline-none ring-0 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                    />
                  </div>
                  {normalizedQuery ? (
                    <div className="mt-3 max-h-80 overflow-y-auto" aria-live="polite">
                      {searchResults.length > 0 ? (
                      searchResults.map((item) => (
                        <Link key={`${item.label}-${item.href}`} href={item.href} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[#EDF1F9]" onClick={closeNavigation}>
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
            className="relative z-10 flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center transition-colors hover:bg-white/10 lg:hidden"
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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
        <div id="mobile-navigation" className="fixed inset-x-0 top-20 z-[90] max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#0D2E6B] pb-4 shadow-[0_24px_50px_rgba(6,26,67,0.35)] lg:hidden">
          <div className="px-6 py-4">
            <label className="sr-only" htmlFor="mobile-site-search">Search ANSECO</label>
            <div className="flex items-center gap-2 rounded-[8px] border border-white/15 bg-white/10 px-3 py-2">
              <Search size={16} className="text-[#C9990A]" />
              <input
                id="mobile-site-search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Keyword search"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/70"
              />
            </div>
            {searchQuery.trim() ? (
              <div className="mt-2 overflow-hidden rounded-lg bg-[#091d47]" aria-live="polite">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <Link key={`${item.label}-${item.href}`} href={item.href} className="block px-4 py-2.5 text-xs text-white/75 hover:bg-white/10" onClick={closeNavigation}>
                      <span className="block font-semibold text-white">{item.label}</span>
                      <span>{item.description}</span>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-3 text-xs text-white/75">No matching pages found.</p>
                )}
              </div>
            ) : null}
          </div>
          {navLinks.map((link) => {
            const isActive = navLinkIsActive(link, pathname);
            return (
            <div key={link.label}>
              {link.children ? (
                <button
                  className={`flex min-h-11 w-full touch-manipulation items-center justify-between px-6 py-3 text-left text-sm font-medium hover:bg-white/10 ${isActive ? "bg-[#C9990A] text-white" : "text-white/90"}`}
                  aria-expanded={mobileExpanded === link.label}
                  aria-controls={`mobile-menu-${link.label.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                >
                  {link.label}
                  <ChevronDown size={14} className={mobileExpanded === link.label ? "rotate-180" : ""} />
                </button>
              ) : (
                <Link href={link.href} aria-current={pathMatches(link.href, pathname) ? "page" : undefined} className={`block px-6 py-3 text-sm font-medium hover:bg-white/10 ${isActive ? "bg-[#C9990A] text-white" : "text-white/90"}`} onClick={(event) => {
                  handleNavLinkClick(event, link.href);
                  setMobileOpen(false);
                }}>{link.label}</Link>
              )}
              {link.children && mobileExpanded === link.label ? (
                <div id={`mobile-menu-${link.label.toLowerCase().replaceAll(" ", "-")}`} className="bg-[#091d47]">
                  {link.children.map((child) => (
                    <div key={child.label}>
                      {child.children ? (
                        <button className="flex min-h-11 w-full items-center justify-between px-10 py-2.5 text-left text-xs text-white/75 hover:bg-white/10" aria-expanded={mobileSubExpanded === child.label} onClick={() => setMobileSubExpanded(mobileSubExpanded === child.label ? null : child.label)}>
                          {child.label}
                          <ChevronDown size={12} className={mobileSubExpanded === child.label ? "rotate-180" : ""} />
                        </button>
                      ) : (
                        <Link href={child.href} aria-current={pathMatches(child.href, pathname) ? "page" : undefined} className={`block px-10 py-2.5 text-xs hover:bg-white/10 ${navLinkIsActive(child, pathname) ? "bg-white/15 font-bold text-white" : "text-white/70"}`} onClick={(event) => {
                          handleNavLinkClick(event, child.href);
                          setMobileOpen(false);
                        }}>{child.label}</Link>
                      )}
                      {child.children && mobileSubExpanded === child.label ? (
                        <div className="bg-[#071530]">
                          {child.children.map((sub) => (
                            <Link key={sub.label} href={sub.href} aria-current={pathMatches(sub.href, pathname) ? "page" : undefined} className={`block px-14 py-2 text-xs hover:bg-white/10 ${pathMatches(sub.href, pathname) ? "bg-white/15 font-bold text-white" : "text-white/75"}`} onClick={(event) => {
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
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
