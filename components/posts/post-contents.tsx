import MarkdownViewer from './markdown-viewer';

interface Props {
  contents: {
    category: string;
    date: string;
    content: string;
    title: string;
  };
}

export default function PostContents({
  contents: { category, title, date, content },
}: Props) {
  return (
    <section className='relative p-4 py-6 mt-60 bg-slate-100'>
      <h2 className='py-1 px-3 mb-4 rounded-full bg-indigo-500 text-white text-xs w-fit'>
        {category}
      </h2>
      <h3 className='font-sans absolute top-8 right-4 text-slate-600 text-sm'>
        {new Date(date).toLocaleDateString()}
      </h3>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <MarkdownViewer content={content} />
    </section>
  );
}
