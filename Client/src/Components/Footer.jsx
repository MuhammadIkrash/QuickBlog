import { assets, footer_data } from "../Assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10  border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 sm:w-44 select-none" />
          <p className="mt-6 max-w-102.5">
            Think out loud, share what matters, and publish your story in
            seconds. Your blogging platform for tech, startups, lifestyle, and
            beyond.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-between md:w-[45%]  gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a className="hover:underline transition" href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm md:text-base py-4 text-primary/80 ">
        Copyright 2026 © QuickBlog - Muhammad Ikrash All Right reserved.
      </p>
    </div>
  );
};

export default Footer;
