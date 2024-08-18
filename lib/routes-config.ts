import { Title } from "@radix-ui/react-dialog";

// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Start",
    href: "start",
    items: [
      { title: "Introductie", href: "/introduction" },
      { title: "Regels", href:"/regels"},
      { title: "Updates", href:"/changelog"}
    ],
  },
  {
    title: "Rankups Uitgelegd",
    href: "rankups",
    items: [
      { title: "Team verkeer", href: "/Team-Verkeer" },
      { title: "Hondengeleider", href:"/hondengeleider"},
      { title: "VAG Teams", href:"/vag"},
      { title: "Onopvallend", href:"/onopvallend"},
      { title: "Luchtvaart", href:"/luchtvaart"},
      { title: "Koninklijke Marechaussee", href:"/kmar"},
      { title: "Speciale Eenheden", href:"/speciale-eenheden"}
    ],
  },
  {
    title: "Simpele Problemen",
    href: "tutorials",
    items: [
      { title: "Discord verbinden met FiveM", href: "/verbind-discord" },
      { title: "Geen in-game Appstore", href: "/geen-appstore"}
    ],
  },
  
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
