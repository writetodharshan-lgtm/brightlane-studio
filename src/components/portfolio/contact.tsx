import { useState } from "react";

const EMAIL = "writetodharshan@gmail.com";
const PHONE = "+919677624776";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Website design & build",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project enquiry — ${form.type}`
    );
    const body = encodeURIComponent(
      `Hello Brightlane Studio,\n\nName: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}\n`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground";
  const selectCls =
    "w-full appearance-none rounded-lg border border-input bg-card px-4 py-3 pr-11 text-sm text-card-foreground outline-none transition-colors focus:border-foreground";
  const labelCls = "label-mono mb-2 block";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-hero reveal max-w-5xl text-[11vw] leading-[0.95] sm:text-6xl lg:text-7xl">
          Let's build something{" "}
          <span className="font-serif font-normal lowercase italic tracking-normal">
            amazing
          </span>{" "}
          together
        </h2>
        <p className="reveal mt-6 max-w-xl text-lg text-muted-foreground">
          Tell us what you're planning. Share the essentials and we'll take it
          from there.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={submit} className="reveal grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelCls}>
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className={labelCls}>
                Project type
              </label>
              <div className="relative">
                <select
                  id="type"
                  value={form.type}
                  onChange={update("type")}
                  className={selectCls}
                >
                  <option>Website design & build</option>
                  <option>Web application</option>
                  <option>E-commerce store</option>
                  <option>Cybersecurity</option>
                  <option>Something else</option>
                </select>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
                >
                  ▾
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelCls}>
                About the project
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="What are you building, and what does success look like?"
                className={inputCls}
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Send the brief
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <div className="reveal flex flex-col justify-between gap-10">
            <div>
              <p className="label-mono mb-4">Prefer direct contact?</p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-hero block text-3xl transition-colors hover:text-muted-foreground sm:text-4xl"
              >
                {EMAIL}
              </a>
              <p className="label-mono mt-2">
              <a className="transition-colors hover:text-foreground" href={`tel:${PHONE}`}>{PHONE}</a>
              </p>
            </div>

            <div>
              <p className="label-mono mb-4">Call or email to start a conversation</p>
              <a href={`tel:${PHONE}`} className="text-hero text-xl transition-colors hover:text-muted-foreground sm:text-2xl">{PHONE}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
