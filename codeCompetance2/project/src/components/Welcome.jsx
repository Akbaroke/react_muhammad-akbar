import HERO_IMG from '../assets/bg-hero.jpg';

export default function Welcome() {
  return (
    <section id="hero" className="relative">
      <img
        src={HERO_IMG}
        alt="hero"
        className="absolute object-cover w-full h-[600px] z-0"
      />
      <div className="relative z-10 flex flex-col gap-[30px] text-center items-center justify-center w-full h-[600px]">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-[35px] font-semibold mb-[10px]">
            WELCOME TO OUR WEBSITE
          </h1>
          <p className="text-white text-[16px]">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <button className="text-white bg-[#1a6396] px-[28px] py-[12px] cursor-pointer">
          JOIN NOW
        </button>
      </div>
    </section>
  );
}
