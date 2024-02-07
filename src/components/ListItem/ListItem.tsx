import Image from 'next/image'

type ListItemProps = {
  image: string;
  title: string;
  starRating: string;
  rating: string;
  year: string;
  genre: string;
  runtime: string;
  cast: string;
};

export default function ListItem({ data }: { data: any }) {
  return (
    <article className="flex items-start space-x-6 bg-white p-6">
      <Image
        src={data.image}
        alt={''}
        width={'60'}
        height={'88'}
        className={'flex-none rounded-md bg-slate-100'}
      />
      <div className={'relative min-w-0 flex-auto'}>
        <h2 className={'truncate pr-20 font-semibold text-slate-900'}>
          {data.title}
        </h2>
        <dl className={'mt-2 flex flex-wrap text-sm font-medium leading-6'}>
          <div className={'absolute right-0 top-0 flex items-center space-x-1'}>
            <dt className={'text-sky-500'}>
              <span className={'sr-only'}>StarRating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{data.starRating}</dd>
          </div>
          <div>
            <dt className={'sr-only'}>Rating</dt>
            <dd className={'rounded px-1.5 ring-1 ring-slate-200'}>
              {data.rating}
            </dd>
          </div>
          <div className="ml-2">
            <dt className="sr-only">Year</dt>
            <dd>{data.year}</dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {data.genre}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Runtime</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {data.runtime}
            </dd>
          </div>
          <div className="mt-2 w-full flex-none font-normal">
            <dt className="sr-only">Cast</dt>
            <dd className="text-slate-400">{data.cast}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
