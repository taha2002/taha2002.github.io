import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface BlogPostData {
    id: string;
    title: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    excerpt: string;
    content?: string;
    [key: string]: any;
}

export async function getSortedPostsData() {
    if (!fs.existsSync(postsDirectory)) {
        console.warn('Posts directory does not exist:', postsDirectory);
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName) => fileName.endsWith('.md')).map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title || id,
            date: matterResult.data.date || '',
            excerpt: matterResult.data.excerpt || '',
            ...(matterResult.data as any),
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        id,
        content: matterResult.content, // Return raw markdown content
        title: matterResult.data.title || id,
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        category: matterResult.data.category || 'Uncategorized',
        readTime: matterResult.data.readTime || '5 min read',
        ...(matterResult.data as any),
    };
}

