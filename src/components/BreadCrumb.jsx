import ArrowLeftIcon from './icons/ArrowLeftIcon'
import { Link } from 'react-router-dom'
const BreadCrumb = () => {
  return (
    <div className='flex items-center gap-2 py-4'>
      <Link
        to='/'
        className='text-xl font-medium text-gray-600 hover:text-primary'
      >
        بلاگ
      </Link>
      <span className='text-base text-gray-500'>
        <ArrowLeftIcon className='w-6 h-6' />
      </span>
      <Link to='/' className='text-base text-primary'>
        <span className='text-xl font-medium text-gray-600 transition hover:text-primary'>
          گیاهخواری
        </span>
      </Link>
      <span className='text-base text-gray-500'>
        <ArrowLeftIcon className='w-6 h-6' />
      </span>
      <Link to='/' className='text-base text-primary'>
        <span className='text-xl font-medium text-gray-600 transition hover:text-primary'>
          انواع گیاهخواری
        </span>
      </Link>
    </div>
  )
}

export default BreadCrumb
