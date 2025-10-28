import fs from "fs";
import path from "path";
import matter from "gray-matter";
import InsightsHero from "./components/InsightsHero";
import InsightsPosts from "./components/InsightsPosts";
import RequestPopup from "@/global_components/RequestPopup";
import "@/style/insights.scss";

export const metadata = {
  title: "Market Insights & Business Guidance | Aceptanta ",
  description: "Explore Aceptanta’s insights on international business setup, operational strategies, and industry trends. Stay informed with expert analysis to guide your company’s growth and decisions.",
  openGraph: {
    title: "Market Insights & Business Guidance | Aceptanta ",
    description: "Explore Aceptanta’s insights on international business setup, operational strategies, and industry trends. Stay informed with expert analysis to guide your company’s growth and decisions.",
  },
};

export default async function InsightsPage() {
  const postsDirectory = path.join(process.cwd(), "src/content/posts");
  const filenames = fs.readdirSync(postsDirectory);

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
    <>
      <InsightsHero />
      <InsightsPosts posts={posts} />
      <RequestPopup />
    </>
  );
}
