export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className='my-4 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700'>
      {children}
    </div>
  );
}