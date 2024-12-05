import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import "@/style/single-post.scss";
import { ButtonIcon } from '../../../global_components/Icons';

export default async function PostPage({ params }) {
  const { slug } = params;

  const postsDirectory = path.join(process.cwd(), "src/content/posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames.map((filename) => filename.replace(".md", ""));
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = currentIndex + 1 < slugs.length ? slugs[currentIndex + 1] : null;

  return (
    <div className="single-post">
      <div className="single-post__inner container">
        <div className="top">
          <h1>{data.title}</h1>
          <div className="image-container">
            {data.image && <img src={data.image} alt={data.title} />}
          </div>
        </div>

        <div className="content">
          <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <div className="col-buttons">
            <div className="col-buttons__inner">
                <Link href="/insights" className="btn button all-posts">
                All Insights
                <ButtonIcon />
                </Link>

                {nextSlug && (
                <Link href={`/insights/${nextSlug}`} className="btn next-post">
                    Next Article
                    <ButtonIcon />
                </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}
