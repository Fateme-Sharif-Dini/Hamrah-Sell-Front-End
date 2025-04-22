'use client';

import { SearchInput } from '@/components/form/SearchInput';
import { useState } from 'react';

const MyComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="mx-auto max-w-3xl p-4">
      <SearchInput
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="جست و جو"
      />
    </div>
  );
};

export default MyComponent;
