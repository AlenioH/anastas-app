import Image from 'next/image';

export default function Home() {
  return (
    <div className="  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-montserrat)]">
      <h1>Анастасия Давыдос</h1>
      <main className="container flex flex-col gap-8 row-start-2 items-center sm:items-start p-4">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-montserrat)]">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>


      </main>

    </div>
  );
}
