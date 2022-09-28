import { IconButton } from "@mui/material";
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { PageContainer } from "../page-container";

export function Footer() {
  return (
    <footer>
      <section className="p-4 sm:p-6">
        <hr className="my-6 border-gray2 sm:mx-auto lg:my-8" />

        <PageContainer>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy; 2022{" "}
              <a
                href="https://nairomudumane.vercel.app/"
                className="link font-semibold"
                target="_blank"
              >
                Nairo Mudumane
              </a>
              .
            </span>

            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://linkedin.com/in/nairo-mudumane/"
                target="_blank"
                className="text-gray-500 "
              >
                <IconButton>
                  <LinkedIn fontSize="medium" color="inherit" />
                </IconButton>
              </a>

              <a
                href="https://www.facebook.com/nayro.mudumane/"
                target="_blank"
                className="text-gray-500 "
              >
                <IconButton>
                  <FacebookRounded fontSize="medium" color="inherit" />
                </IconButton>
              </a>

              <a
                href="https://www.instagram.com/nairo_mudumane/"
                target="_blank"
                className="text-gray-500 "
              >
                <IconButton>
                  <Instagram fontSize="medium" color="inherit" />
                </IconButton>
              </a>
            </div>
          </div>
        </PageContainer>
      </section>
    </footer>
  );
}
