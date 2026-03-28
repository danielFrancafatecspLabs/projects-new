import type { PropsWithChildren } from "react";

interface ScreenFrameProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
}

export default function ScreenFrame({
  title,
  subtitle,
  children,
}: ScreenFrameProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28">
      {(title || subtitle) && (
        <header className="mb-8 space-y-3 text-center sm:mb-10">
          {title ? (
            <h1 className="font-display text-3xl leading-tight text-black/90 sm:text-4xl">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </header>
      )}
      {children}
    </main>
  );
}
