'use client';

import { useState } from 'react';
import SearchableDropdown from '../components/dropdown/SearchableDropdown';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const options = [
    'گزینه یک',
    'گزینه دو',
    'گزینه سه',
    'گزینه چهار',
    'گزینه پنج',
  ];

  return (
    <div className="w-64">
      <SearchableDropdown
        label="عنوان دراپ داون"
        required
        options={['گزینه یک', 'گزینه دو', 'گزینه سه']}
        value={selectedValue}
        onChange={setSelectedValue}
        error="این فیلد نمی تواند خالی باشد."
      />
    </div>
  );
};

export default MyComponent;
