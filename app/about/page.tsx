
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="bg-parchment min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-base text-ink/60 transition-colors hover:text-ink"
      >
        ← Return to the Craftbook
      </Link>
      <h1 className="mb-8 text-4xl">About</h1>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Project</h2>
        <p>
          Hush House Craftbook is an unofficial fan-made recipe archive for
          Book of Hours and its DLC "House of Light".
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Contact the Librarian who made this</h2>
        <ul className="space-y-2">
          <li>burnikodoesntburn @ tumblr</li>
          <li>阿铙铙纸 @ rednote</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Credits</h2>

        <ul className="space-y-2">
          <li>Data: from the game.</li>
          <li>Additional verification:</li>
          <li>Book of Hours Wiki (en): https://book-of-hours.fandom.com/wiki/</li>
          <li>Book of Hours Wiki (zh): https://boh.huijiwiki.com/wiki</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Disclaimer</h2>

        <p>
          This website is a non-commercial fan project created for reference purposes only. Book of Hours and all related
          intellectual property belong to Weather Factory.
        </p>
      </section>
    </div></main>
  );
}