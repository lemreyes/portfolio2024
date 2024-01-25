export default function Hero() {
  return (
    <section id="Hero" className="flex flex-row">
      <div className="w-1/2 flex flex-col items-start">
        <span className="uppercase nunito text-[20px] font-bold">
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
          <button className="px-4 py-1 roboto text-lg font-medium leading-[150%] mr-4">
            Projects
          </button>
          <button className="px-4 py-1 roboto text-lg font-medium leading-[150%] border-2 rounded-xl border-black">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
}
