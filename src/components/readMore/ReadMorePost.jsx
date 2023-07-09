import postImg from '../../assets/img/blog/tasty-appetizing-crispbread-with-mashed-avocado-served-plate.png'
import ClockIcon from '../icons/ClockIcon'
const ReadMorePost = () => {
  return (
    <div className='flex gap-5 pt-6'>
      <div className='w-36 '>
        <img className='rounded' src={postImg} alt='post-img' />
      </div>
      <div className='flex flex-col justify-between'>
        <div className='font-medium text-xl text-gray-500'>
          عنوان مطلب ......................{' '}
        </div>
        <div className='flex items-center gap-2'>
          <ClockIcon />
          <span className='text-sm text-gray-400'>24 فروردین 1402</span>
        </div>
      </div>
    </div>
  )
}

export default ReadMorePost
