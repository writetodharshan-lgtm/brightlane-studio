import { useEffect, useState } from "react";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="label-mono">
          © {new Date().getFullYear()} Brightlane Studio — Web & tech solutions
        </p>
        <p className="label-mono">
          Local time <span className="text-foreground">{time || "--:--:--"}</span>
        </p>
        <a
          href="#top"
          className="label-mono flex items-center gap-2 transition-colors hover:text-foreground"
        >
          Back to top <span className="text-base">↑</span>
        </a>
      </div>
    </footer>
  );
}
