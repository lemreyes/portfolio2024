import list_easy_screencap from "../assets/list_easy_screencap.png";
import audiophile_screencap from "../assets/audiophile_screencap.png";

export default function Projects() {
  return (
    <section id="Projects" className="mt-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="playfair text-5xl font-bold leading-[72px]">Projects</h2>
        <div className="h-1 bg-accent w-36">&nbsp;</div>
      </div>
      <article className="mt-16 flex flex-col desktop:flex-row bg-white rounded-0 desktop:rounded-xl desktop:mb-0 desktop:w-11/12 shadow-2xl">
        <div className="flex flex-col items-start justify-center w-full desktop:w-1/2 px-8 mb-8 desktop:mb-0">
          <h2 className="playfair text-4xl mt-8 desktop:mt-0 mb-8">ListEasy</h2>
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
          <div className="flex flex-row">
            <a href="https://github.com/lemreyes/shopping_list" target="_blank">
              <div
                className="px-4 py-1 roboto text-lg text-white font-medium leading-[150%] mr-4 bg-primary rounded-xl border-2 border-primary
                              hover:bg-white hover:text-primary"
              >
                See the code
              </div>
            </a>
            <a href="https://shopping-list83.vercel.app/" target="_blank">
              <div
                id="list-easy-site"
                className="px-4 py-1 roboto text-lg font-medium leading-[150%] border-2 rounded-xl border-black
                                hover:bg-black hover:text-white"
              >
                Go to site
              </div>
            </a>
          </div>
        </div>
        <div className="w-full desktop:w-1/2 h-auto">
          <img
            src={list_easy_screencap}
            alt="List Easy app screenshot"
            className="w-full h-auto rounded-0 desktop:rounded-r-xl"
          />
        </div>
      </article>
      <article className="mt-24 flex flex-col desktop:flex-row bg-white rounded-0 desktop:rounded-xl desktop:w-11/12 shadow-2xl">
        <div className="w-full desktop:w-1/2 order-last desktop:order-first">
          <img
            src={audiophile_screencap}
            alt="Audiophile screenshot"
            className="w-full h-auto rounded-0 desktop:rounded-l-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full desktop:w-1/2 px-8 order-first desktop:order-last mt-8 desktop:mt-0 mb-8 desktop:mb-0">
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
          <div className="flex flex-row">
            <a href="https://github.com/lemreyes/audiophile" target="_blank">
              <div
                id="audiophile-code"
                className="px-4 py-1 roboto text-lg text-white font-medium leading-[150%] mr-4 bg-primary rounded-xl border-2 border-primary
                                hover:bg-white hover:text-primary"
              >
                See the code
              </div>
            </a>
            <a href="https://audiophile-omss.onrender.com/" target="_blank">
              <button
                id="audiophile-site"
                className="px-4 py-1 roboto text-lg font-medium leading-[150%] border-2 rounded-xl border-black
                                hover:bg-black hover:text-white"
              >
                Go to site
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
