import Banner1 from "../assets/home-banner.png";

const Banner = () => {
  return (
    <div className="relative flex w-full px-4 md:px-10 h-[50vh] md:h-[60vh] my-10">
      <img src={Banner1} className="bg-cover bg-center w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r mx-4 md:mx-10 from-black to-transparent opacity-70"></div>
      <div className="absolute flex flex-col gap-4 md:gap-10 justify-center py-16 px-4 md:px-10">
        <p className="font-semibold text-yellow">Categories</p>
        <p className="md:text-5xl text-4xl font-medium text-white w-[60%]">
          Enjoy Your Favorite Juice at low prices
        </p>
        <button className="bg-yellow hover:bg-opacity-40 py-2 px-4 text-center w-fit max-sm:text-sm">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
