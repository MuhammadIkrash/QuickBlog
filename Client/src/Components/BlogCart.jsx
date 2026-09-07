import { Link } from "react-router-dom";

const BlogCart = ({ blog }) => {
  const { image, title, description, category, _id } = blog;
  return (
    <Link
      to={`/blog/${_id}`}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <img src={image} alt="Blog Thumbnail" className="aspect-video select-none" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900 text-sm">{title}</h5>
        <p className="mb-3 text-xs text-gray-600" dangerouslySetInnerHTML={{'__html':description.slice(0,100)+"...."}}></p>
      </div>
    </Link>
  );
};

export default BlogCart;
