import { ReactComponent as LikeIcon } from '../assets/icons/heart.svg'
import Avatar from '../assets/img/avatar/avatar.svg'
const AuthorDetail = () => {
  return (
    <div className='space-y-10 p-2 mt-4'>
      <div className='flex gap-6'>
        <div className='w-28 h-28 rounded-2xl'>
          <img src={Avatar} alt='user-img' className='w-full h-full' />
        </div>
        <div className='py-4 space-y-2'>
          <div className='text-2xl'>نام نویسنده</div>
          <div className='flex items-center '>
            <LikeIcon className='cursor-pointer fill-current text-gray-500 hover:text-primary transition' />
            <span className='text-lg text-gray-500 pt-1 -mr-2'>240</span>
          </div>
        </div>
      </div>
      <p className='text-justify leading-10'>
        درباره نویسنده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
        ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
        شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
        طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان
        امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
        پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
        سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
  )
}

export default AuthorDetail
