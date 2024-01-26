import profile_image from "../assets/_MG_0979_reverse_web.jpg";

export default function Hero() {
  return (
    <section id="Hero" className="flex flex-row gap-x-16">
      <div className="w-2/3 flex flex-col items-start">
        <span className="uppercase nunito text-[20px] font-bold text-primary">
          FULL STACK DEVELOPER
        </span>
        <h1 className="playfair text-6xl font-bold leading-[120%] text-left">
          Hello, I am Lemuel Leogene Reyes
        </h1>
        <p className="nunito text-2xl leading-[150%] text-left text-gray-500">
          Seasoned Software Engineer and Project Manager with 17 years of
          expertise, ready to elevate your projects as a Full Stack Web
          Developer.
        </p>
        <div>
          <button className="px-4 py-1 roboto text-lg text-white font-medium leading-[150%] mr-4 bg-primary rounded-xl border-2 border-primary">
            Projects
          </button>
          <button className="px-4 py-1 roboto text-lg font-medium leading-[150%] border-2 rounded-xl border-black">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="w-1/3 px-16 py-16 bg-primary items-center justify-center">
        <img src={profile_image} alt="profile picture" />
      </div>
    </section>
  );
}
