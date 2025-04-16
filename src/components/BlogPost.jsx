import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const { id } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        // Fetch the markdown content based on the post ID
        fetch(`${process.env.PUBLIC_URL}/content/${id}.md`)
            .then(response => response.text())
            .then(text => setMarkdownContent(text));
    }, [id]);

    return (
        <div className="blog-post min-h-[600px] py-12 px-6 max-w-screen-xl mx-auto">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
}
