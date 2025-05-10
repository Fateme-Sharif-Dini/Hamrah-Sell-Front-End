'use client';

import { FC, Suspense, useState } from 'react';
import SvgSearch from '@/components/icons/search';
import useSearchUrlUpdater from '@/hooks/use-search-url-updater';

type Props = {};

const FakeSearchBox: FC<Props> = () => {
  const [query, setQuery] = useState('');
  const updateUrl = useSearchUrlUpdater();

  const handleSearch = () => {
    updateUrl({ q: query });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="border-black-white-50 relative w-96 overflow-hidden rounded-lg border-2 p-2">
      <input
        placeholder="جست و جو"
        className="placeholder:text-black-white-300 w-full appearance-none pl-12 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSearch}
        className="bg-primary-300 shadow-xs hover:bg-primary-300/80 absolute bottom-0 left-0 top-0 cursor-pointer p-2 text-white"
      >
        <SvgSearch />
      </button>
    </div>
  );
};

export const SearchBox: FC<Props> = (props) => {
  return (
    <Suspense>
      <FakeSearchBox {...props} />
    </Suspense>
  );
};
