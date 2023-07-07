import Header from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col py-8">
      <Header />
      <main className="flex-1">
        <div className="container max-w-[700px] flex flex-col space-y-6 divide-y divide-dashed">
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
