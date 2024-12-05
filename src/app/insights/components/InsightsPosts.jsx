"use client";
import React from "react";
import Link from "next/link";
import RequestButton from "@/global_components/RequestButton";
import { ButtonIcon } from '../../../global_components/Icons';

const InsightsPosts = ({ posts }) => {
    return (
      <section className="insights-posts">
        <div className="insights-posts__inner container">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="insights-post__wrapper fadeInUp">
              <div className="insights-post">
                {post.image && <img src={post.image} alt={post.title} />}
                <div className="content">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="insights-post__link">
                    Read Article
                    <ButtonIcon />
                  </div>
                </div>
              </div>
            </Link>
          ))}
  
          <div className="connectBlock fadeInUp">
            <div className="connectBlock__inner">
                <RequestButton text={"Connect with the Team"} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default InsightsPosts;
  