'use client';

import { useState } from 'react';
import SearchableDropdown from '../components/dropdown/SearchableDropdown';
import SelectableCard from '../components/card/SelectableCard'
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
    <div >
<SelectableCard
  variant="square"
  image='/images/StoresCart.png'
  href='/store/page'
  cardTitle='Store'
  storeName="Store Name"
  signTitle="Store Description"
  items={[
    { label: "Location" },
    { label: "Phone" },
    { label: "Email" },
  ]}
/>
    </div>


  );
};

export default MyComponent;
