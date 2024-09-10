import { getBlogs } from "../actions";
import ContactBox from "../components/contact-box";
import BlogBox from "./blog-box";

export const metadata = {
  title: "Blog Index",
  description: "Explore our latest blogs and articles.",
  keywords: "blogs, articles, news, updates",
};

const BlogsIndex = async () => {
  const data = await getBlogs();

  return (
    <>
      <div className="w-full py-[4rem]">
        <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
          <div className="flex w-full items-center justify-center">
            <p className="font-waheed text-[42px] text-center">
              މީޑިއާ ސެންޓަރ
            </p>
          </div>
          <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:px-[10rem] px-0 mt-12 rtl">
            {data.blogs.map((blog, index) => (
              <BlogBox key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <ContactBox />
    </>
  );
};

export default BlogsIndex;
