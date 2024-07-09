const Subscribe = () => {
  return (
    <section className="bg-[#61D167] pt-[60px] pb-[180px] lg:pt-[120px] lg:pb-[240px] relative">
      <div className="relative mx-auto max-w-screen-xl overflow-hidden px-5">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="font-cabinet text-center font-bold text-3xl lg:text-5xl leading-[110%] tracking-tight text-[#1C1C1C] relative z-20">
            Want to stay in the know? Subscribe now.
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-center">
            <input
              placeholder="Your email"
              className="py-[14px] px-4 bg-white w-full lg:w-[360px]"
            ></input>
            <button className="text-white bg-black flex justify-center items-center px-8 py-5 font-retrocomputer hover:text-black hover:bg-[#FEA933] hover:rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-10 w-full bg-[url(../assets/images/bg-home-9.png)] bg-cover h-[100px] lg:h-[200px] bg-no-repeat"></div>
    </section>
  );
};
export default Subscribe;
