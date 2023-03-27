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
    <section className='relative px-4 py-6 border bg-slate-100 flex flex-col'>
      <span className='block font-sans text-slate-600 text-sm self-end mb-2'>
        {new Date(date).toLocaleDateString('ko')}
      </span>
      <h6 className='py-1 px-3 mb-4 rounded-full bg-indigo-500 text-white text-xs w-fit'>
        {category}
      </h6>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <MarkdownViewer content={content} />
    </section>
  );
}