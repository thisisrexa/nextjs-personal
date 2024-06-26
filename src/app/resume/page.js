import Timeline from '@/components/Timeline';
import ProgressBar from '@/components/ProgressBar';
import Tag from '@/components/Tag';

export const metadata = {
  title: 'رزومه',
  description: 'توسعه دهنده جونیور فرانت-اند، برنامه نویس جونیور پایتون، کاربر گنو/لینوکس، هنرجوی رشته شبکه و نرم افزار، علاقه',
};

export default function ResumePage() {
  return (
    <>
      <section className='py-8' id='bioSection'>
        <h2 className='arrow-left pb-6 text-2xl font-bold'>بیوگرافی</h2>
        <p>
          توسعه دهنده جونیور فرانت-اند، برنامه نویس جونیور پایتون، کاربر گنو/لینوکس، هنرجوی رشته شبکه و نرم افزار، علاقه
          مند به کار تیمی و استارت آپ همچنین تجربه کارآموزی به عنوان پسیو/اکتیو کار شبکه.
        </p>
      </section>
      <section className='py-8' id='expSection'>
        <h2 className='arrow-left pb-6 text-2xl font-bold'>سوابق شغلی</h2>
        <Timeline title='فریلنسر توسعه دهنده وب' start='۹۹'></Timeline>
        <Timeline title='کار آموز شبکه' start='۱۴۰۲/۳' end='۱۴۰۲/۶'></Timeline>
        <Timeline title='اپراتور کافی نت' start='۱۴۰۰' end='۱۴۰۱'></Timeline>
      </section>
      <section className='py-8' id='eduSection'>
        <h2 className='arrow-left pb-6 text-2xl font-bold'>سوابق تحصیلی</h2>
        <Timeline title='مدرک دیپلم در رشته شبکه و نرم افزار' start='۹۹' end='۱۴۰۲'>
          هنرستان ابن سینا
        </Timeline>
      </section>
      <section className='py-8' id='skillsSection'>
        <h2 className='arrow-left pb-6 text-2xl font-bold'>مهارت ها</h2>
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <ProgressBar percent='90'>HTML</ProgressBar>
          <ProgressBar percent='90'>CSS</ProgressBar>
          <ProgressBar percent='90'>JavaScript</ProgressBar>
          <ProgressBar percent='80'>ReactJS</ProgressBar>
          <ProgressBar percent='90'>Tailwind CSS</ProgressBar>
          <ProgressBar percent='40'>Sass</ProgressBar>
          <ProgressBar percent='60'>UI/UX</ProgressBar>
          <ProgressBar percent='60'>Python</ProgressBar>
          <ProgressBar percent='20'>NodeJS</ProgressBar>
          <ProgressBar percent='30'>GNU/Linux (LPIC 1)</ProgressBar>
          <ProgressBar percent='20'>Git</ProgressBar>
          <ProgressBar percent='30'>Network</ProgressBar>
        </ul>
      </section>
      <section className='py-8' id='langSection'>
        <h2 className='arrow-left pb-6 text-2xl font-bold'>زبان ها</h2>
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <ProgressBar percent='90'>فارسی</ProgressBar>
          <ProgressBar percent='50'>انگلیسی</ProgressBar>
          <ProgressBar percent='10'>ژاپنی</ProgressBar>
        </ul>
      </section>
      <section className='py-8' id='favSection'>
        <h2 className='arrow-left pb-6 text-2xl font-bold'>علاقه مندی ها</h2>
        <ul className='flex flex-wrap gap-2'>
          <Tag>تکنولوژی</Tag>
          <Tag>موزیک</Tag>
          <Tag>دویدن</Tag>
          <Tag>استارت آپ</Tag>
          <Tag>گیم</Tag>
          <Tag>انیمه ترجیحا دارک</Tag>
          <Tag>Black Cats</Tag>
        </ul>
      </section>
    </>
  );
}
