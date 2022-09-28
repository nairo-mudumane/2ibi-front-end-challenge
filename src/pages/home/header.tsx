import React from "react";
import { IconButton, Menu } from "@mui/material";
import { SearchInput } from "./search";
import { Menu as IconMenu } from "@mui/icons-material";
import { PAGES } from "./pages.dataset";

export function Header() {
  const [mobileMenu, setMobileMenu] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMenu);

  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenu(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenu(null);
  };

  return (
    <header className="!mt-0 my-6 p-2 text-gray1 sticky top-2 z-10 bg-white1 border border-blue2 shadow-sm rounded-md transition hover:shadow-md hover:border-blue1 md:p-4">
      <div className="flex items-center justify-between">
        <div className="mx-1 !mr-2">
          <a href="/">
            <img src="/vite.svg" alt="logo" />
          </a>
        </div>

        <div className="mx-1">
          <SearchInput />
        </div>

        <nav>
          <div className="text-gray1 text-md md:hidden">
            <IconButton
              aria-controls={mobileMenu ? "mobile-menu" : undefined}
              aria-haspopup="true"
              onClick={openMobileMenu}
            >
              <IconMenu />
            </IconButton>

            <Menu
              anchorEl={mobileMenu}
              open={isMobileMenuOpen}
              onClose={closeMobileMenu}
              MenuListProps={{
                "aria-labelledby": "mobile-menu",
              }}
            >
              <ul className="px-6 text-gray1 text-md font-semibold">
                {PAGES.map((page) => (
                  <li key={page.link} className="my-2">
                    <a
                      target="_blank"
                      href={page.link}
                      className=" link"
                      onClick={closeMobileMenu}
                    >
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Menu>
          </div>

          <ul className="hidden text-gray1 text-md font-semibold items-center justify-start md:flex">
            {PAGES.map((page) => (
              <li key={page.link} className="mx-2">
                <a target="_blank" className="link" href={page.link}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
