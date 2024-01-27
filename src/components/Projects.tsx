import list_easy_screencap from "../assets/list_easy_screencap.png";

export default function Projects() {
  return (
    <section id="Projects" className="mt-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="playfair text-5xl font-bold leading-[72px]">Projects</h2>
        <div className="h-1 bg-accent w-36">&nbsp;</div>
      </div>
      <article className="mt-8 flex flex-row gap-8 w-10/12 bg-white pl-8 rounded-lg">
        <div className="flex flex-col items-start justify-center w-1/2">
          <h2 className="playfair text-4xl mb-8">ListEasy</h2>
          <p className="nunito text-lg leading-[150%] text-regularText text-left mb-4">
            Meet your new go-to shopping companion – a masterlist-based app that
            ensures you never forget an item. Easily add items from the master
            list, create multiple lists, and reuse them effortlessly. Streamline
            your shopping experience and stay organized with this user-friendly
            solution.
          </p>
          <p className="text-left mb-8">
            <span className="font-bold">Tech stack:</span> Typescript, React,
            NextJS, Tailwind, Prisma, NextAuth
          </p>
          <div>
            <button className="px-4 py-1 roboto text-lg text-white font-medium leading-[150%] mr-4 bg-primary rounded-xl border-2 border-primary">
              See the code
            </button>
            <button className="px-4 py-1 roboto text-lg font-medium leading-[150%] border-2 rounded-xl border-black">
              Go to site
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={list_easy_screencap}
            alt="List Easy app screenshot"
            className="w-full"
          />
        </div>
      </article>
    </section>
  );
}
