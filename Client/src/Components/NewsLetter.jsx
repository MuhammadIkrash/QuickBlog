const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 my-32 max-sm:mx-2 ">
      <h1 className="text-2xl md:text-4xl font-semibold text-primary/85">Never Miss a Blog!</h1>
      <p className="md:text-lg text-sm text-gray-500/70 pb-8">Subscribe to get the latest blog ,new tech,and exclusive news.</p>
      <form className="flex justify-between items-center max-w-2xl w-full md:h-13 h-12">
        <input required className="border border-gray-300 rounded-md rounded-r-none h-full outline-none w-full px-3 text-gray-500 caret-gray-400" type="text" placeholder="Enter Your Email id"/>
        <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
