import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import "@/style/policy.scss";

export default function cookiePolicyPage() {
  const filePath = path.join(process.cwd(), "src/content/policies/cookie-policy.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <div className="policy-page">
      <div className="policy-page__inner container">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}