import profile_image from "../assets/_MG_0979_reverse_web.jpg";
import profile_image_square from "../assets/_MG_0979_reverse_square.jpg";

export default function Hero() {
  return (
    <section id="Hero" className="flex flex-col desktop:flex-row bg-heroBg">
      <div className="w-full desktop:w-7/12 flex flex-col items-start px-8 mb-8 desktop:mb-0 order-last tablet:order-first">
        <span className="uppercase nunito text-[20px] font-bold text-primary mt-8 mb-8">
          FULL STACK DEVELOPER
        </span>
        <h1 className="playfair text-6xl font-bold leading-[120%] text-left mb-8">
          Hello, I am Lemuel Leogene Reyes
        </h1>
        <p className="nunito text-2xl leading-[150%] text-left text-regularText mb-8">
          Seasoned Software Engineer and Project Manager with 17 years of
          expertise, ready to elevate your projects as a Full Stack Web
          Developer.
        </p>
        <div className="flex flex-row">
          <a href="#Projects">
            <div
              className="px-4 py-1 roboto text-lg text-white font-medium leading-[150%] mr-4 bg-primary rounded-xl border-2 border-primary
                        hover:bg-white hover:text-primary"
            >
              Projects
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/lemuel-leogene-r-9838b936/"
            target="_blank"
          >
            <div
              className="px-4 py-1 roboto text-lg font-medium leading-[150%] border-2 rounded-xl border-black
                        hover:bg-black hover:text-white"
            >
              LinkedIn
            </div>
          </a>
        </div>
      </div>
      <div className="w-full desktop:w-5/12 p-8 desktop:py-16 bg-primary flex items-center align-middle justify-center">
        <picture>
          <source srcSet={profile_image} media="(min-width: 1024px)" />
          <img
            src={profile_image_square}
            alt="profile picture"
            className="rounded-full desktop:rounded-none border-3 border-regularText "
          />
        </picture>
      </div>
    </section>
  );
}
