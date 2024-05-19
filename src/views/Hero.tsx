// Constants
import { home } from "../constants/home";

export function Hero() {
  return (
    <section className="py-64 lg:py-72 flex flex-col justify-center items-center text-center gap-3 lg:items-start lg:text-start container">
      <div>
        <h1 className="text-5xl font-extrabold text-gradient lg:text-7xl">
          {home.title}
        </h1>
        <h2 className="font-semibold lg:text-3xl">{home.subtitle}</h2>
        <p>{home.description}</p>
      </div>
      <a
        href={home.form.href}
        target="_blank"
        className="p-1 px-3 rounded-full bg-orange-700 text-white transition-transform hover:scale-105"
      >
        {home.form.title}
      </a>
    </section>
  );
}
