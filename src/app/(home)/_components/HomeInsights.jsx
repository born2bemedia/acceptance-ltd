import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ButtonIcon } from "../../../global_components/Icons";

const HomeInsights = () => {
  // Путь к папке с постами
  const postsDirectory = path.join(process.cwd(), "src/content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  // Чтение постов
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      excerpt: data.excerpt,
      image: data.image || null,
    };
  });

  return (
    <section className="home-insights">
      <div className="home-insights__inner container">
        <div className="top fadeInUp">
          <h3>Latest company insights</h3>
          <Link href="/insights" className="button">
            More Insights
            <ButtonIcon />
          </Link>
        </div>

        <div className="posts">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="insights-post__wrapper fadeInUp"
            >
              <div className="insights-post">
                {post.image && (
                  <img src={post.image} alt={post.title} className="post-image" />
                )}
                <div className="content">
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <div className="insights-post__link">
                    Read
                    <ButtonIcon />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInsights;
