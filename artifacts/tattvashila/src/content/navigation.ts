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
  { label: "Philosophy",  href: "/philosophy",   isRoute: true  },
  { label: "Archive",     href: "/archive",       isRoute: true  },
  { label: "Notes",       href: "/notes",         isRoute: true  },
  { label: "Granthālaya", href: "/granthalaya",   isRoute: true  },
  { label: "Origin",      href: "/origin",        isRoute: true  },
  { label: "About",       href: "/about",         isRoute: true  },
  { label: "Contact",     href: "/contact",       isRoute: true  },
  { label: "Constitution", href: "/constitution", isRoute: true  },
];

export const FOOTER_NAV: FooterNavGroup[] = [
  {
    label: "The work",
    links: [
      { label: "Philosophy",  href: "/philosophy",  isRoute: true  },
      { label: "Archive",     href: "/archive",     isRoute: true  },
      { label: "Granthālaya", href: "/granthalaya", isRoute: true  },
    ],
  },
  {
    label: "About",
    links: [
      { label: "Origin",            href: "/origin",  isRoute: true  },
      { label: "About",             href: "/about",   isRoute: true  },
      { label: "Quiet Notes",       href: "/notes",   isRoute: true  },
      { label: "Reflective intake", href: "/#intake", isRoute: false },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/tattvashila" },
  { label: "YouTube",   href: "https://youtube.com/@tattvashila"  },
];
