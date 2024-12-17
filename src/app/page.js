import Image from 'next/image';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="sm:p-20 font-[family-name:var(--font-montserrat)]">
      <div className="mb-4">
        <h1>Анастасия Давыдова</h1>
        <h2>@davydoffsta</h2>
      </div>
      <main className="container flex flex-col gap-4 items-center sm:items-start">
        <div className="flex flex-col gap-2 font-medium tracking-tight m-4 text-center">
          <p>
            <strong>
              Преподаватель немецкого. Психолог. Трижды эмигрантка.
            </strong>
          </p>
          <p>Спикер. Создатель воркшопов.</p>
          <p>Я про любовь к себе в новой стране.</p>
        </div>
        <Link
          href="/about"
          className="flex gap-2 underline underline-offset-4 text-lg"
        >
          Сделай первый шаг! <ArrowLongRightIcon className="h-6 w-6" />
        </Link>
        <Image
          src="/photo1.png"
          width={300}
          height={300}
          alt=""
          layout="responsive"
        />
      </main>
    </div>
  );
}
