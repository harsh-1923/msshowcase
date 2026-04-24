import Image from "next/image";

const images: { src: string; caption: string }[] = [
  { src: "/images/DSCF0050.JPG", caption: "DSCF0050" },
  { src: "/images/DSCF0051.JPG", caption: "DSCF0051" },
  { src: "/images/DSCF0054.JPG", caption: "DSCF0054" },
  { src: "/images/DSCF0057.JPG", caption: "DSCF0057" },
  { src: "/images/DSCF0067.JPG", caption: "DSCF0067" },
  { src: "/images/DSCF0077.JPG", caption: "DSCF0077" },
  { src: "/images/DSCF0082.JPG", caption: "DSCF0082" },
  { src: "/images/DSCF0088.JPG", caption: "DSCF0088" },
  { src: "/images/DSCF0089.JPG", caption: "DSCF0089" },
  { src: "/images/DSCF0090.JPG", caption: "DSCF0090" },
  { src: "/images/DSCF0092.JPG", caption: "DSCF0092" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-24 py-16 px-4">
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Bringing Slack and Linear into VSCode
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            A few stills from a VSCode extension I built that brings{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Slack
            </span>{" "}
            (a communication platform) and{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Linear
            </span>{" "}
            (a ticketing platform) directly into{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              VSCode
            </span>
            . The goal: better context engineering and improved agentic
            workflows, by keeping the conversations and tickets that shape your
            work one keystroke away from the code itself.
          </p>
        </header>
        {images.map(({ src, caption }, i) => (
          <figure key={src} className="flex flex-col gap-3">
            <Image
              src={src}
              alt={caption}
              width={1600}
              height={1067}
              className="h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
              priority={i === 0}
            />
            <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
              {caption}
            </figcaption>
          </figure>
        ))}
      </main>
    </div>
  );
}
