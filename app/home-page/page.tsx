import Card from '@/components/card/SelectableCard'
import { CartIcon } from '@/components/icons/CartIcon';
import { DocumentChatIcon } from '@/components/icons/DocumentChatIcon';
import { PhoneEditIcon } from '@/components/icons/PhoneEditIcon';
import { MobileIcon } from '@/components/icons/MobileIcon';
import { SubtractIcon } from '@/components/icons/SubtractIcon';
import { UserIcon } from '@/components/icons/UserIcon';
import { LogoutIcon } from '@/components/icons/LogoutIcon';
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon';
export default function HomePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className='w-65'></div>

      {/* Main Content Scrollable */}
      <div className="flex-1 overflow-x-auto bg-white px-4 space-y-6 scrollbar-hide mx-auto max-w-[1059p] w-full pl-15">
        {/* Header */}
        <div className='flex flex-row w-full mt-5 gap-6'>
          <div className="w-180 h-8 border-2 border-gray-300 bg-white p-4 rounded-md flex justify-between items-center">
           <div className="text-black text-sm">
            <span className='font-bold'>علیرضا رضایی </span>
             عزیز به همراه سل خوش آمدید
           </div>
          </div>
          <div className='w-20 h-8 bg-[#E6F4FB] border-1 border-[#2BA7E0] rounded-lg flex items-center px-7'>
            <EnvelopeIcon></EnvelopeIcon>
          </div>
          <div className='w-20 h-8 bg-[#E6F4FB] border-1 border-[#2BA7E0] flex items-center rounded-lg px-7'>
            <UserIcon></UserIcon>
          </div>
          <div className='w-20 h-8 bg-[#FFEDE6] border-1 border-[#FF6D2B] flex items-center rounded-lg px-7'>
            <LogoutIcon></LogoutIcon>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full rounded-md overflow-hidden ">
          <img
            src="/images/banner.png"
            alt="Banner"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* System Stats */}
        <div className="space-y-2">
          <h2 className="text-center text-xl font-bold text-[#0095DA]">آمار سیستم</h2>
          <div className="flex flex-wrap justify-center gap-4 border-t-2 p-4 border-t-gray-300 w-210 mr-20">
            <div className='w-60 border-1 border-gray-300 rounded-lg h-30 flex flex-row'>
              <div className='bg-[#0095DA] w-20 rounded-r-xl flex items-center justify-center px-2'>
                <MobileIcon></MobileIcon>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[#0095DA] font-bold text-lg mx-3'>دستگاه ثبت شده</p>
                <p className='text-black text-lg'>31</p>
              </div>
            </div>
            <div className='w-60 border-1 border-gray-300 rounded-lg h-30 flex flex-row'>
              <div className='bg-[#0095DA] w-20 rounded-r-xl flex items-center justify-center px-2'>
                <PhoneEditIcon></PhoneEditIcon>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[#0095DA] font-bold text-lg mx-3'>دستگاه ثبت شده</p>
                <p className='text-black text-lg'>31</p>
              </div>
            </div>
            <div className='w-60 border-1 border-gray-300 rounded-lg h-30 flex flex-row'>
              <div className='bg-[#0095DA] w-20 rounded-r-xl flex items-center justify-center px-2'>
                <SubtractIcon></SubtractIcon>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[#0095DA] font-bold text-lg mx-3'>دستگاه ثبت شده</p>
                <p className='text-black text-lg'>31</p>
              </div>
            </div>
            <div className='w-60 border-1 border-gray-300 rounded-lg h-30 flex flex-row'>
              <div className='bg-[#0095DA] w-20 rounded-r-xl flex items-center justify-center px-2'>
                <CartIcon></CartIcon>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[#0095DA] font-bold text-lg mx-3'>دستگاه ثبت شده</p>
                <p className='text-black text-lg'>31</p>
              </div>
            </div>
            <div className='w-60 border-1 border-gray-300 rounded-lg h-30 flex flex-row'>
              <div className='bg-[#0095DA] w-20 rounded-r-xl flex items-center justify-center px-2'>
                <DocumentChatIcon></DocumentChatIcon>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[#0095DA] font-bold text-lg mx-3'>دستگاه ثبت شده</p>
                <p className='text-black text-lg'>31</p>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Access */}
        <div className="space-y-2 mx-10">
          <h2 className="text-center text-lg font-bold text-[#0095DA]">دسترسی سریع</h2>
          <div className="flex flex-row gap-8 border-2 border-gray-300 p-5 px-8 rounded-lg w-230" >
            <Card 
              variant='square'
              image='/images/card1.png'
              href='/...'
              cardTitle="دستگاه‌ها" />
            <Card 
              variant='square'
              image='/images/card1.png'
              href='/...'
              cardTitle="فروشگاه‌ها" />
            <Card 
              variant='square'
              image='/images/card1.png'
              href='/...'
              cardTitle="تامین کنندگان" />
          </div>
        </div>
        <div className='h-10 flex items-center justify-center p-3 text-gray-700 '>
          <p className='mb-3'>تمام حقوق همراه سل برای شرکت ارتباطات سیار ایران (همراه اول) محفوظ است.</p>
        </div>
      </div>
    </div>
  );
}