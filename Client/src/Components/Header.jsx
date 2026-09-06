import { assets } from "../Assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:sm-24 relative">
      <div className="mt-20 mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>New:AI Feature integrated</p>
          <img src={assets.star_icon} alt="star_icon" className="w-2.5" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your Own <span className="text-primary">Blogging</span> <br />
          Platform
        </h1>
      </div>
      <img
        src={assets.gradientBackground}
        alt="gradientBackground"
        className="absolute -top-50 -z-1 "
      />
    </div>
  );
};

export default Header;
