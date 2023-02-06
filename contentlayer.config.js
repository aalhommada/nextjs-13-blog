import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'


const computedFields = {
    wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
};

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        summary: { type: 'string', required: true },
        category: { type: 'string', required: true },

    },
    computedFields,
}));

const contentLayerConfig = makeSource({
    contentDirPath: 'content',
    documentTypes: [Blog],
    mdx: { rehypePlugins: [highlight] },
});

export default contentLayerConfig;