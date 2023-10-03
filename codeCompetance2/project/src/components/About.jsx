export default function About() {
  return (
    <section id="contact" className="flex flex-col">
      <div className="px-10 pb-56 pt-10 bg-slate-800 text-center font-semibold">
        <h1 className="text-white text-[35px]">About us</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center p-10 relative -top-48 bg-slate-400/30 backdrop-blur-lg mx-10 rounded-lg border border-slate-500 shadow-lg">
        <img
          src="https://t3.ftcdn.net/jpg/01/28/95/86/360_F_128958691_XesV1Q1x10WOuIGLq1PolnEaYHdM08rO.jpg"
          alt="foto"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-6">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eum dolores minima ipsum hic adipisci explicabo, tenetur eveniet
            numquam, ad voluptate eaque aliquid odio ipsa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime eveniet iure quod, quibusdam illo voluptas eum. Numquam
            voluptatem, nobis dolores dolore nihil nam molestiae.
          </p>
        </div>
      </div>
    </section>
  );
}
