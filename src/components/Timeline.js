export default function Timeline({ title, start, end = 'حال حاضر', children }) {
  return (
    <ul className='mr-[0.55rem] flex flex-col-reverse border-r-2 border-zinc-300 pr-[0.85rem] dark:border-zinc-800'>
      <li className="mb-4 before:absolute before:-ml-[1.4rem] before:-mr-[1.4rem] before:h-4 before:w-4 before:rounded-full before:bg-zinc-800 before:shadow-[0_0_0_0.1875rem] before:shadow-zinc-800/25 before:content-[''] dark:before:bg-zinc-200 dark:before:shadow-zinc-100/25">
        <div className='relative top-[-0.35rem] break-words pr-4'>
          <div className='mb-2 text-xl font-semibold text-zinc-700 dark:text-zinc-300'>{title}</div>
          <div className='mb-2 text-sm text-zinc-500'>
            {start} — {end}
          </div>
          {children && <p>{children}</p>}
        </div>
      </li>
    </ul>
  );
}
