import authorImg from '../../assets/img/avatar/jane-doe.png'
import postImg from '../../assets/img/blog/tasty-appetizing-crispbread-with-mashed-avocado-served-plate.png'
import ClockIcon from '../../components/icons/ClockIcon'

const PostTitle = () => {
  return (
    <div className='relative flex flex-col items-center pb-10'>
      <div>
        <img src={postImg} alt='post-title' className='' />
        <div className='absolute flex items-center justify-center top-0 w-full h-24 backdrop-blur-md '>
          <h1 className='text-white font-medium text-3xl'>عنوان مطلب</h1>
          <div className='absolute w-full h-full bg-white opacity-30'></div>
        </div>
      </div>
      <div id='avatar' className='flex flex-col -my-14'>
        <img
          src={authorImg}
          alt='author'
          className='w-28 border-2 border-gray-50 rounded-4xl'
        />
        <div className='text-base font-medium text-center text-gray-600'>
          نام نویسنده
        </div>
      </div>
      <div
        id='time'
        className='w-full flex justify-between items-center text-sm text-gray-500'
      >
        <div className='flex gap-1'>
          <ClockIcon className='' />{' '}
          <span className='text-base text-gray-500'>زمان مطالعه: 3 دقیقه</span>
        </div>
        <span className='text-base text-gray-500'>
          آخرین ویرایش: 24 فروردین 1402
        </span>
      </div>
    </div>
  )
}

export default PostTitle
