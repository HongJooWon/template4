import Image from 'next/image';
import { AiFillTags, AiFillClockCircle, AiFillCalendar } from 'react-icons/ai';

interface Props {
  contents: {
    path: string;
    date: string;
    category: string;
    title: string;
    thumbnail?: string;
    readingTime?: number;
  };
}

export default function PostHeader({
  contents: { path, category, date, title, thumbnail, readingTime },
}: Props) {
  const iconClass = 'mr-1 w-4 h-4 text-slate';
  const infoClass = 'text-sm flex items-center';

  return (
    <header className='w-full pb-6 border-b border-slate relative flex flex-col bg-box'>
      {path && (
        <Image
          src={`/images/${category}/${thumbnail}`}
          alt='Post Thumbnail'
          width={500}
          height={500}
          priority
          className='w-full h-60 lg:h-80 object-cover self-center'
        />
      )}
      <ul className='flex space-x-3 m-4 mt-10'>
        <li className={infoClass}>
          <AiFillTags className={iconClass} />
          {category}
        </li>
        <li className={infoClass}>
          <AiFillCalendar className={iconClass} />
          {new Date(date).toLocaleDateString('ko')}
        </li>
        <li className={infoClass}>
          <AiFillClockCircle className={iconClass} />
          {readingTime?.toFixed(0)} min to read
        </li>
      </ul>
      <h1 className='text-3xl font-bold ml-4'>{title}</h1>
    </header>
  );
}
