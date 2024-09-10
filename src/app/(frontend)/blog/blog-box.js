import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogBox = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="rounded-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full lg:h-[220px] h-[160px] object-cover rounded-xl"
        />
        <div className="py-4 px-2">
          <h3 className="font-waheed text-[22px] lg:text-[20px] xl:text-[22px] rtl">
            {blog.title_dv}
          </h3>
          <p className="text-[16px] text-[#8D898D] text-right ltr capitalize mt-2">
            {moment(blog.date_created).format("DD MMMM YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogBox;
