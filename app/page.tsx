import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col py-8">
      <header className="container max-w-[700px]">
        <div className="flex items-center justify-between border-b py-4">
          <a href="" className="flex items-center space-x-2">
            <div className="flex flex-col space-y-1 text-sm leading-none">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EEBF3A"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-lg font-heading">Lujain Alajmi</span>
              </div>
              <span>Your friendly neighborhood nerd.</span>
            </div>
          </a>
          <div className="flex items-center space-x-2">
            <a href={"mailto:lujainmalajmi@gmail.com"}>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/lujain-alajmi-1625271b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Button>
            </a>
            <a
              href="https://github.com/LujainAlajmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <svg
                  viewBox="0 0 438.549 438.549"
                  className="h-4 w-4 fill-current"
                >
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  ></path>
                </svg>
              </Button>
            </a>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-[700px] flex flex-col space-y-6 divide-y">
          <article className="pt-6">
            <div className="space-y-1">
              <h2 className="font-heading text-xl">About</h2>
              <p className="text-muted-foreground">
                I&apos;m a self-taught developer who loves to build things. Tech
                i enjoy building with: React, Next.js, ReactNative, TailwindCSS,
                Supabase, Prisma, NextAuth, and Shadcn/ui.
              </p>

              <p className="text-muted-foreground"></p>
            </div>
          </article>
          <article className="pt-6">
            <div className="space-y-1">
              <h2 className="font-heading text-xl">Projects</h2>
              <p className="text-muted-foreground">
                A collection of projects I&apos;ve worked on.
              </p>
            </div>
            <ul className="space-y-4 py-4">
              <li>
                <a
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://invoice-app-chi-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium underline underline-offset-4 ">
                    invoice app
                  </span>
                  <span className="text-muted-foreground">
                    An invoice app built with React, Next.js, NextAuth,
                    Supabase, Prisma and Shadcn/ui. The app allows you to
                    create, edit, delete, and view invoices
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://entertainment-web-app-lime.vercel.app/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium underline underline-offset-4 ">
                    entertainment app
                  </span>
                  <span className="text-muted-foreground">
                    An entertainment app built with React, Next.js, NextAuth,
                    Supabase, Prisma and TailwindCSS. In this app i tried the
                    new Next.js 13.4 update with ServerActions and new App
                    router.
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://github.com/LujainAlajmi/tip-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium underline underline-offset-4 ">
                    tip calculator
                  </span>
                  <span className="text-muted-foreground">
                    My first ReactNative app built with ReactNative, Expo, and
                    TailwindCSS. The app is a tip calculator that allows you to
                    split the bill between friends.
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://markdown-editor-zeta-pearl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium underline underline-offset-4 ">
                    markdown editor
                  </span>
                  <span className="text-muted-foreground">
                    A markdown editor built with React, Next.js, NextAuth and
                    TailwindCSS. The app allows you to write markdown and
                    preview it. This is the first app i built with NextAuth,
                    Prisma and Supabase and i really enjoyed working with them.
                  </span>
                </a>
              </li>
            </ul>
          </article>
          <article className="pt-6">
            <div className="space-y-1">
              <h2 className="font-heading text-xl">Hot Take</h2>
              <p className="text-muted-foreground">
                people who use light mode are not to be trusted.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
