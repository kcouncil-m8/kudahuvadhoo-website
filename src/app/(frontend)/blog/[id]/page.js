import { getBlogById, getBlogMetadataById } from "../../actions";
import ContactBox from "../../components/contact-box";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  const blog = await getBlogMetadataById(id);

  const previousImages = searchParams.previousImages
    ? JSON.parse(searchParams.previousImages)
    : [];

  return {
    title: blog.title,
    description:
      blog.description ||
      "Welcome to the Dh.Kudahuvadhoo Council, your source for local governance and community services.",
    openGraph: {
      title: blog.title,
      description:
        blog.description ||
        "Welcome to the Dh.Kudahuvadhoo Council, your source for local governance and community services.",
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
    <>
      <div className="container mx-auto py-8 flex flex-col gap-12">
        <h1 className="font-waheed lg:text-[32px] text-[28px] text-center py-4">
          {blog.title_dv}
        </h1>
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
      <ContactBox />
    </>
  );
}
