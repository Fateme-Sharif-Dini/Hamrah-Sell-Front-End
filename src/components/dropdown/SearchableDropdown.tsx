import { useState, useMemo, useEffect, useRef } from 'react';
// import { MagnifyingGlass } from '../icons/magnifyingGlassIcon';
// import { Star } from '../icons/StarIcon';
// import { ChevronDown } from '../icons/ChevronDown';
// import { ExclamationMark } from '../icons/ExclamationMarkIcon';

interface SearchableDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  error?: string;
}

const SearchableDropdown = ({
  options,
  value,
  onChange,
  label,
  required,
  error,
}: SearchableDropdownProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options
  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="flex items-center gap-1 text-right text-xl font-bold">
          {label}
          {/* {required && <Star className="text-destructive h-2 w-2" />} */}
        </label>
      )}

      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-right ${
            error ? 'border-[var(--orange-300)]' : 'border-gray-300'
          } focus:outline-none`}
        >
          <span className="text-gray-700">{value || 'انتخاب کنید'}</span>
          {/* <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 transform' : ''}`}
          /> */}
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-b-md border border-t-0 bg-white shadow-sm">
            <div className="p-2">
              <div className="relative flex items-center">
                {/* <MagnifyingGlass className="absolute left-3 h-5 w-5 -translate-y-1/2 transform stroke-gray-400 text-gray-400" /> */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="جست و جو"
                  className="w-full rounded-md pl-10 pr-1 text-right focus:outline-none"
                />
              </div>
            </div>

            <div className="max-h-60 overflow-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-3 py-2 text-right hover:bg-[var(--primary-100)]"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                      setSearchTerm('');
                    }}
                  >
                    {option}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-right text-gray-500">
                  نتیجه‌ای یافت نشد.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {error && (
        <div className="mt-[31px] flex items-center gap-1 text-right">
          {/* <ExclamationMark className="h-4 w-4 text-[var(--orange-300)]" /> */}
          <p className="text-sm text-[var(--orange-300)]">{error}</p>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
