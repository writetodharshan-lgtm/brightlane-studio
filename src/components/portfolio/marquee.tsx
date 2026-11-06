import { Fragment } from "react";

export function Marquee({
  text = "Let's work together",
  items: phrases,
  slow = false,
  className = "",
}: {
  text?: string;
  slow?: boolean;
  className?: string;
  items?: string[];
}) {
  const list = phrases?.length ? phrases : Array.from({ length: 8 }, () => text);
  return (
    <div className={"relative overflow-hidden border-y border-border py-5 " + className}>
      <div className={"marquee-track " + (slow ? "slow" : "")}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
            {list.map((t, i) => (
              <Fragment key={i}>
                <span className="text-hero px-6 text-4xl sm:text-6xl">{t}</span>
                <span className="font-serif text-3xl italic text-accent sm:text-4xl">
                  ✦
                </span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
