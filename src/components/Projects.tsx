import list_easy_screencap from "../assets/list_easy_screencap.png";
import audiophile_screencap from "../assets/audiophile_screencap.png";

export default function Projects() {
  return (
    <section id="Projects" className="mt-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="playfair text-5xl font-bold leading-[72px]">Projects</h2>
        <div className="h-1 bg-accent w-36">&nbsp;</div>
      </div>
      <article className="mt-8 flex flex-row bg-white rounded-xl">
        <div className="flex flex-col items-start justify-center w-1/2 px-8">
          <h2 className="playfair text-4xl mb-8">ListEasy</h2>
          <p className="nunito text-lg leading-[150%] text-regularText text-left mb-4">
            Meet your new go-to shopping companion – a masterlist-based app that
            ensures you never forget an item. Easily add items from the master
            list, create multiple lists, and reuse them effortlessly. Streamline
            your shopping experience and stay organized with this user-friendly
            solution.
          </p>
          <p className="text-left mb-8">
            <span className="font-bold">Tech stack:</span> Typescript, NextJS,
            Tailwind, Prisma, NextAuth, Zustand
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
        <div className="w-1/2 h-auto">
          <img
            src={list_easy_screencap}
            alt="List Easy app screenshot"
            className="w-full h-auto rounded-r-xl"
          />
        </div>
      </article>
      <article className="mt-8 flex flex-row bg-white rounded-xl">
        <div className="w-1/2">
          <img
            src={audiophile_screencap}
            alt="Audiophile screenshot"
            className="w-full h-auto rounded-l-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-1/2 px-8">
          <h2 className="playfair text-4xl mb-8">
            Audiophile E-Commerce Website
          </h2>
          <p className="nunito text-lg leading-[150%] text-regularText text-left mb-4">
            A guru-level multi-page coding challenge in frontendmentor.com.
            Users can add, remove, and edit products in the cart. Rather than
            just coding for the frontend, I turned it into a fullstack effort by
            storing and retrieving the product information and details from a
            PostgreSQL database.
          </p>
          <p className="text-left mb-8">
            <span className="font-bold">Tech stack:</span> Typescript, NextJS,
            Tailwind, Prisma, NextAuth, Zustand
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
      </article>
    </section>
  );
}
