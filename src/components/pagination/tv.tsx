import { tv } from 'tailwind-variants';

export const paginationTV = tv({
  slots: {
    base: 'flex items-center justify-center -space-x-px h-12 text-base-600 rounded-lg text-xs',
    active: 'bg-primary-800 !text-black-white-50 hover:bg-primary-900',
    item: 'cursor-pointer first:rounded-r-xl px-2 size-12  last:rounded-l-xl text-xs flex items-center justify-center transition-all duration-100   leading-tight text-base-600 bg-black-white-10 border border-none hover:bg-black-white-10 active:text-background active:hover:brightness-105',
    next: 'flex items-center justify-center px-6 size-12 text-base-600 bg-black-white-10  border-background/10 border rounded-l-lg hover:bg-black-white-10 hover:text-background disabled:pacity-50  disabled:pointer-events-none',
    prev: 'flex items-center justify-center px-6 size-12 ml-0 leading-tight text-base-content bg-black-white-10 border border-background/10 rounded-r-lg hover:bg-black-white-10 hover:text-background disabled:opacity-50  disabled:pointer-events-none',
  },
});
