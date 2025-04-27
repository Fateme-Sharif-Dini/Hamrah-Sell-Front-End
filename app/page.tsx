'use client';

import { toast } from 'sonner';
import { CustomToaster } from '@/components/ui/sonner';

function showToast(type: 'success' | 'error') {
  toast.custom(() => (
    <CustomToaster title="این یک متن برای نوتیفیکیشن است!" type={type} />
  ));
}

export default function Page() {
  return (
    <>
      <div className="mt-10 flex flex-col gap-4">
        <button onClick={() => showToast('success')}>موفقیت</button>

        <button onClick={() => showToast('error')}>خطا</button>
      </div>
    </>
  );
}
