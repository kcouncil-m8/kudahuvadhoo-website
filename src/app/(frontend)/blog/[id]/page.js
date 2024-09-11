import { getBlogById, getBlogMetadataById } from "../../actions";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  const blog = await getBlogMetadataById(id);

  const previousImages = searchParams.previousImages
    ? JSON.parse(searchParams.previousImages)
    : [];

  return {
    title: blog.title,
    description: blog.description || "Read more about this blog post.",
    openGraph: {
      title: blog.title,
      description: blog.description || "Read more about this blog post.",
      images: [blog.image, ...previousImages],
      type: "article",
      url: `${process.env.BASE_URL}/blog/${id}`,
    },
  };
}

export default async function BlogShow({ params }) {
  const { id } = params;
  const blog = await getBlogById(id);

  return (
    <div className="container mx-auto py-8 flex flex-col gap-12">
      <h1 className="font-waheed text-[32px] text-center">{blog.title_dv}</h1>
      <div className="rounded-lg overflow-hidden lg:px-[8rem] px-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 mx-auto">
        <div
          className="text-[16px] text-justify font-rasmee prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        />
      </div>
    </div>
  );
}
