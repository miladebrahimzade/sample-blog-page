import UserIcon from '../icons/UserIcon'
import MessageIcon from '../icons/MessageIcon'
import PostImage from '../../assets/img/blog/post-img-placeholder.png'

const SimilarPost = () => {
  return (
    <div className='relative flex-shrink-0'>
      <div className='rounded-t'>
        <img src={PostImage} alt='post-img' />
      </div>
      <div className='absolute top-0 left-4 pt-3 px-2 pb-2 bg-gray-100 rounded-b'>
        <div className='flex flex-col items-center'>
          <span className='text-sm text-gray-600'>فروردین</span>
          <span className='font-bold text-3xl text-gray-600'>8</span>
        </div>
      </div>
      <div className='relative mt-5'>
        <div className='absolute -top-8 left-4 py-1 px-4 rounded text-sm bg-secondary text-white'>
          تغذیه، میوه، ویتامین
        </div>
        <h4 className='text-md leading-8 text-justify mb-2 text-gray-600'>
          آنچه باید درباره میوه های قرمز و چگونه مصرف کردن آنها، بدانیم!
        </h4>
        <div className='flex items-center gap-10'>
          <div className='flex gap-4'>
            <UserIcon /> <span className='text-gray-600'>علی نوری</span>
          </div>
          <div className='flex gap-4'>
            <MessageIcon /> <span className='text-gray-600'>16 نظر</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimilarPost
