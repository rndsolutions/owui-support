import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
    { id: 1, title: "First Blog Post", summary: "This is the summary of the first blog post.", path: "example-post" },
    { id: 2, title: "Second Blog Post", summary: "This is the summary of the second blog post.", path: "second-post" },
    // Add more blog posts here
];

export default function BlogList() {
    return (
        <div className="blog-list min-h-[600px] py-12 px-6 max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12">Blog</h2>
            <ul>
                {blogPosts.map(post => (
                    <li key={post.id} className="mb-4">
                        <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                            <h3 className="text-2xl font-bold">{post.title}</h3>
                        </Link>
                        <p>{post.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
