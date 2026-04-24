import Image from "next/image";
import SearchCarousel from "./search-carousel";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-24 py-16 px-4">
        <div className="flex flex-col items-center gap-4">
          <small className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            built with Artificial Intelligence end to end
          </small>
          <figure
            className="flex w-full flex-col items-center gap-4 text-zinc-900 dark:text-zinc-100"
            aria-label="Venn diagram of Slack/Teams, Linear/Jira and VSCode. Shared context in green, missed context hatched in red."
          >
            <svg viewBox="0 0 400 300" className="w-full max-w-lg" role="img">
              <defs>
                <pattern
                  id="hatch"
                  patternUnits="userSpaceOnUse"
                  width="7"
                  height="7"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="7"
                    stroke="#ef4444"
                    strokeWidth="1.25"
                    strokeOpacity="0.6"
                  />
                </pattern>
                <mask id="m-top">
                  <rect width="400" height="300" fill="black" />
                  <circle cx="200" cy="128" r="80" fill="white" />
                  <circle cx="150" cy="202" r="80" fill="black" />
                  <circle cx="250" cy="202" r="80" fill="black" />
                </mask>
                <mask id="m-bl">
                  <rect width="400" height="300" fill="black" />
                  <circle cx="150" cy="202" r="80" fill="white" />
                  <circle cx="200" cy="128" r="80" fill="black" />
                  <circle cx="250" cy="202" r="80" fill="black" />
                </mask>
                <mask id="m-br">
                  <rect width="400" height="300" fill="black" />
                  <circle cx="250" cy="202" r="80" fill="white" />
                  <circle cx="200" cy="128" r="80" fill="black" />
                  <circle cx="150" cy="202" r="80" fill="black" />
                </mask>
                <mask id="in-a">
                  <rect width="400" height="300" fill="black" />
                  <circle cx="200" cy="128" r="80" fill="white" />
                </mask>
                <mask id="in-b">
                  <rect width="400" height="300" fill="black" />
                  <circle cx="150" cy="202" r="80" fill="white" />
                </mask>
                <mask id="in-c">
                  <rect width="400" height="300" fill="black" />
                  <circle cx="250" cy="202" r="80" fill="white" />
                </mask>
                <mask id="out-a">
                  <rect width="400" height="300" fill="white" />
                  <circle cx="200" cy="128" r="80" fill="black" />
                </mask>
                <mask id="out-b">
                  <rect width="400" height="300" fill="white" />
                  <circle cx="150" cy="202" r="80" fill="black" />
                </mask>
                <mask id="out-c">
                  <rect width="400" height="300" fill="white" />
                  <circle cx="250" cy="202" r="80" fill="black" />
                </mask>
              </defs>

              <rect
                width="400"
                height="300"
                fill="url(#hatch)"
                mask="url(#m-top)"
              />
              <rect
                width="400"
                height="300"
                fill="url(#hatch)"
                mask="url(#m-bl)"
              />
              <rect
                width="400"
                height="300"
                fill="url(#hatch)"
                mask="url(#m-br)"
              />

              <g mask="url(#in-a)">
                <g mask="url(#in-b)">
                  <rect
                    width="400"
                    height="300"
                    fill="#facc15"
                    fillOpacity="0.45"
                    mask="url(#out-c)"
                  />
                </g>
              </g>
              <g mask="url(#in-a)">
                <g mask="url(#in-c)">
                  <rect
                    width="400"
                    height="300"
                    fill="#facc15"
                    fillOpacity="0.45"
                    mask="url(#out-b)"
                  />
                </g>
              </g>
              <g mask="url(#in-b)">
                <g mask="url(#in-c)">
                  <rect
                    width="400"
                    height="300"
                    fill="#facc15"
                    fillOpacity="0.45"
                    mask="url(#out-a)"
                  />
                </g>
              </g>

              <g mask="url(#in-a)">
                <g mask="url(#in-b)">
                  <rect
                    width="400"
                    height="300"
                    fill="#10b981"
                    fillOpacity="0.45"
                    mask="url(#in-c)"
                  />
                </g>
              </g>

              <g fill="none" stroke="currentColor" strokeWidth="1.25">
                <circle cx="200" cy="128" r="80" />
                <circle cx="150" cy="202" r="80" />
                <circle cx="250" cy="202" r="80" />
              </g>

              <g
                fill="currentColor"
                textAnchor="middle"
                fontSize="13"
                fontWeight="500"
              >
                <text x="200" y="36">
                  Slack / Teams
                </text>
                <text x="60" y="278">
                  Linear / Jira
                </text>
                <text x="340" y="278">
                  VSCode
                </text>
              </g>

              <text
                x="200"
                y="183"
                textAnchor="middle"
                fill="currentColor"
                fontSize="13"
                fontWeight="600"
              >
                Context
              </text>
            </svg>
            <figcaption className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-3 w-3 rounded-sm bg-emerald-500/50 ring-1 ring-emerald-600/60"
                />
                shared
              </span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-3 w-3 rounded-sm bg-yellow-400/60 ring-1 ring-yellow-500/70"
                />
                partial
              </span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-3 w-3 rounded-sm bg-red-500/15 ring-1 ring-red-500/60"
                />
                missed
              </span>
            </figcaption>
          </figure>
        </div>
        {/* <figure
          className="flex w-full flex-col items-center gap-5"
          aria-label="Flow diagram showing context loss from chat to ticket to developer to agent to code"
        >
          <div className="flex w-full max-w-sm flex-col items-stretch font-mono text-sm text-zinc-700 dark:text-zinc-300">
            <div className="self-center text-xs text-zinc-500 dark:text-zinc-400">
              Customer chats
            </div>
            <div
              aria-hidden
              className="self-center py-1 leading-none text-zinc-400 dark:text-zinc-600"
            >
              ↓
            </div>

            <div className="relative rounded-sm border border-zinc-400 px-4 py-4 dark:border-zinc-600">
              <span className="absolute -top-2.5 left-3 bg-zinc-50 px-2 text-xs text-zinc-700 dark:bg-black dark:text-zinc-200">
                Slack / Teams
              </span>
              <ul className="space-y-1">
                <li>Discussions</li>
                <li>Decisions</li>
                <li>Questions</li>
                <li>Trade-offs</li>
                <li>Reasoning</li>
                <li>Edge cases</li>
                <li>Tone</li>
                <li>Priority signals</li>
                <li>Screenshots</li>
              </ul>
            </div>

            <div className="flex flex-col items-center py-2">
              <div
                aria-hidden
                className="leading-none text-zinc-400 dark:text-zinc-600"
              >
                ↓
              </div>
              <div className="mt-1 text-center text-[11px] italic leading-snug text-red-600 dark:text-red-400">
                − tone, − trade-offs, − reasoning, − edge cases
              </div>
            </div>

            <div className="relative rounded-sm border border-zinc-400 px-4 py-4 dark:border-zinc-600">
              <span className="absolute -top-2.5 left-3 bg-zinc-50 px-2 text-xs text-zinc-700 dark:bg-black dark:text-zinc-200">
                Linear / Jira
              </span>
              <ul className="space-y-1">
                <li>Title</li>
                <li>Description</li>
                <li>Acceptance criteria</li>
                <li>Priority</li>
                <li>Labels</li>
              </ul>
            </div>

            <div className="flex flex-col items-center py-2">
              <div
                aria-hidden
                className="leading-none text-zinc-400 dark:text-zinc-600"
              >
                ↓
              </div>
              <div className="mt-1 text-center text-[11px] italic leading-snug text-red-600 dark:text-red-400">
                − thread depth, − domain color, − history
              </div>
            </div>

            <div className="relative rounded-sm border border-zinc-400 px-4 py-4 dark:border-zinc-600">
              <span className="absolute -top-2.5 left-3 bg-zinc-50 px-2 text-xs text-zinc-700 dark:bg-black dark:text-zinc-200">
                Developer
              </span>
              <ul className="space-y-1">
                <li>Interpretation</li>
                <li>Assumptions</li>
                <li>Recall</li>
                <li>Mental model</li>
              </ul>
            </div>

            <div className="flex flex-col items-center py-2">
              <div
                aria-hidden
                className="leading-none text-zinc-400 dark:text-zinc-600"
              >
                ↓
              </div>
              <div className="mt-1 text-center text-[11px] italic leading-snug text-red-600 dark:text-red-400">
                − dev&apos;s filter, − partial recall, − missing files
              </div>
            </div>

            <div className="relative rounded-sm border border-zinc-400 px-4 py-4 dark:border-zinc-600">
              <span className="absolute -top-2.5 left-3 bg-zinc-50 px-2 text-xs text-zinc-700 dark:bg-black dark:text-zinc-200">
                Agent
              </span>
              <ul className="space-y-1">
                <li>Prompt</li>
                <li>Snippets</li>
              </ul>
            </div>

            <div
              aria-hidden
              className="self-center py-1 leading-none text-zinc-400 dark:text-zinc-600"
            >
              ↓
            </div>
            <div className="self-center text-xs text-zinc-500 dark:text-zinc-400">
              Code
            </div>
          </div>
          <figcaption className="max-w-sm text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            Context bleeds off at every handoff. By the time the agent writes
            code, most of the conversation that shaped the work is gone.
          </figcaption>
        </figure> */}
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Bringing Slack and Linear into VSCode
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            A few stills from a VSCode extension I built that brings{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Slack
            </span>{" "}
            and{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Microsoft Teams
            </span>{" "}
            (communication platforms) and{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Linear
            </span>{" "}
            (a ticketing platform) directly into{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              VSCode
            </span>
            .
          </p>
          <aside className="relative mt-2 rounded-md border-l-4 border-emerald-500 bg-emerald-500/5 px-5 py-4 dark:border-emerald-400 dark:bg-emerald-400/10">
            <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              The goal
            </div>
            <p className="text-base leading-7 text-zinc-800 dark:text-zinc-100">
              Better context engineering and improved agentic workflows — by
              keeping the conversations and tickets that shape your work one
              keystroke away from the code itself.
            </p>
          </aside>
        </header>
        <figure className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Unified Search
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            One search bar across your code, chat threads, and ticket details —
            so you stop juggling tabs, stay in flow, and keep your workflow
            focused on the problem instead of the tooling.
          </p>
          <Image
            src="/images/DSCF0050.JPG"
            alt="DSCF0050"
            width={1600}
            height={1067}
            className="mt-6 h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
            priority
          />
          <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
            Searching across Slack, Linear, and the repo — all from the VSCode
            command palette.
          </figcaption>
        </figure>
        <figure className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Native VSCode Experience
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Built as a VSCode extension, it follows the editor&apos;s native
            architecture and UI conventions — which means it slots cleanly
            alongside the rest of your tooling and can be wired into other
            pipelines in the VSCode ecosystem as your workflow grows.
          </p>
          <Image
            src="/images/DSCF0090.JPG"
            alt="DSCF0090"
            width={1600}
            height={1067}
            className="mt-6 h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
          />
          <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
            The extension surfaces in the sidebar like any first-party VSCode
            panel — same shortcuts, same theming, same muscle memory.
          </figcaption>
        </figure>
        <figure className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Integrated Communication
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Slack and Teams threads surface right alongside the code they
            reference, so the conversation that shaped a change stays attached
            to it — no more context hunting across tabs.
          </p>
          <Image
            src="/images/DSCF0077.JPG"
            alt="DSCF0077"
            width={1600}
            height={1067}
            className="mt-6 h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
          />
          <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
            Chat threads pinned next to the code they&apos;re about — the
            decision stays with the implementation.
          </figcaption>
        </figure>
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Tickets at a Glance
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Your full Linear queue lives in the sidebar — scan what&apos;s open,
            triage priorities, and jump into a ticket without bouncing between
            the browser and the editor. Better DX, fewer context switches.
          </p>
          <figure className="mt-6 flex flex-col gap-3">
            <Image
              src="/images/DSCF0054.JPG"
              alt="DSCF0054"
              width={1600}
              height={1067}
              className="h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
            />
            <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
              The full ticket list, right where you write the code — no tab
              hopping required.
            </figcaption>
          </figure>
          <figure className="mt-6 flex flex-col gap-3">
            <Image
              src="/images/DSCF0057.JPG"
              alt="DSCF0057"
              width={1600}
              height={1067}
              className="h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
            />
            <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
              A close-up of the kanban view — columns, statuses, and priorities
              all at a glance.
            </figcaption>
          </figure>
        </section>
        {/* <figure className="flex flex-col gap-3">
          <Image
            src="/images/DSCF0088.JPG"
            alt="DSCF0088"
            width={1600}
            height={1067}
            className="h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
          />
          <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
            DSCF0088
          </figcaption>
        </figure> */}
        {/* <figure className="flex flex-col gap-3">
          <Image
            src="/images/DSCF0089.JPG"
            alt="DSCF0089"
            width={1600}
            height={1067}
            className="h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
          />
          <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
            DSCF0089
          </figcaption>
        </figure>
        <figure className="flex flex-col gap-3">
          <Image
            src="/images/DSCF0092.JPG"
            alt="DSCF0092"
            width={1600}
            height={1067}
            className="h-auto w-full rounded-md ring-1 ring-black/10 dark:ring-white/10 shadow-sm"
          />
          <figcaption className="text-sm text-zinc-600 dark:text-zinc-400">
            DSCF0092
          </figcaption>
        </figure> */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            A few more stills
          </h2>
          <SearchCarousel />
        </section>
      </main>
    </div>
  );
}
