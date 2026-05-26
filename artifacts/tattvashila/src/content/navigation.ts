export interface NavItem {
  label: string;
  href: string;
  isRoute: boolean;
}

export interface FooterNavLink {
  label: string;
  href: string;
  isRoute: boolean;
}

export interface FooterNavGroup {
  label: string;
  links: FooterNavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export const SITE_NAV: NavItem[] = [
  { label: "Philosophy", href: "/philosophy", isRoute: true },
  { label: "The work",   href: "/#ecosystem",  isRoute: false },
  { label: "Notes",      href: "/notes",        isRoute: true },
  { label: "Origin",     href: "/about",        isRoute: true },
];

export const FOOTER_NAV: FooterNavGroup[] = [
  {
    label: "The work",
    links: [
      { label: "Philosophy",     href: "/philosophy",  isRoute: true },
      { label: "The dimensions", href: "/#ecosystem",  isRoute: false },
      { label: "The journey",    href: "/#journey",    isRoute: false },
    ],
  },
  {
    label: "About",
    links: [
      { label: "Origin",             href: "/about",    isRoute: true },
      { label: "Reflective intake",  href: "/#intake",  isRoute: false },
      { label: "Quiet Notes",        href: "/notes",    isRoute: true },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/tattvashila" },
  { label: "YouTube",   href: "https://youtube.com/@tattvashila" },
];
