import Avatar from '../../assets/img/avatar/avatar.svg'
import FlagIcon from '../icons/FlagIcon'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import ArcArrowLeftIcon from '../icons/ArcArrowLeftIcon'
import { useState } from 'react'

const Comment = () => {
  const [showCommentRest, setShowCommentRest] = useState(false)
  const [showResponse, setShowResponse] = useState(false)

  const handleShowCommentRest = () => {
    setShowCommentRest(!showCommentRest)
  }

  const handleShowResponse = () => {
    setShowResponse(!showResponse)
  }
  return (
    <div className='py-4 pt-8 space-y-8 '>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-5'>
            <div className='w-16 h-16 rounded-2xl'>
              <img className='w-full bg-cover' src={Avatar} alt='user-img' />
            </div>
            <div>
              <div className='text-gray-700'>نام کاربر</div>
              <div className='text-sm text-gray-400'>24 فروردین 1402</div>
            </div>
          </div>
          <FlagIcon className='w-6 h-6' />
        </div>
        <div
          className='text-justify text-sm leading-10 mt-4 text-gray-600 cursor-pointer'
          onClick={handleShowCommentRest}
        >
          “متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن
          نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر
          متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن
          نظر متن نظر متن نظر”
          <ul className={showCommentRest ? 'block' : 'hidden'}>
            <li className='flex items-center gap-2 text-sm text-gray-600'>
              <span className='text-3xl font-extralight text-primary'>+</span>
              نکته مثبت
            </li>
            <li className='flex items-center gap-2 text-sm text-gray-600'>
              <span className=' text-3xl font-extralight text-primary'>+</span>
              نکته مثبت
            </li>
            <li className='flex items-center gap-2 text-sm text-gray-600'>
              <span className=' text-3xl font-extralight text-primary'>+</span>
              نکته مثبت
            </li>
            <li className='flex items-center gap-2 text-sm text-gray-600'>
              <span className=' text-3xl font-extralight text-primary'>-</span>
              نکته منفی
            </li>
          </ul>
        </div>

        <div
          className='flex items-center justify-between py-1 cursor-pointer'
          onClick={handleShowResponse}
        >
          <div className='flex items-center gap-2 text-primary'>
            <span className='text-sm'>پاسخ ها (2)</span>
            <ArrowLeftIcon className='w-4 h-4 -rotate-90' />
          </div>
          <ArcArrowLeftIcon className='w-6 h-6' />
        </div>
      </div>
      <div
        className={`${
          showResponse ? 'block' : 'hidden'
        } border-r-2 border-dashed`}
      >
        <div className='relative pt-8 mr-8 border-t'>
          <div className='absolute w-3 h-3 rounded bg-gray-300 -right-10 top-11'></div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
              <div className='w-16 h-16 rounded-2xl'>
                <img className='w-full bg-cover' src={Avatar} alt='user-img' />
              </div>
              <div>
                <div className='text-gray-700'>نام کاربر</div>
                <div className='text-sm text-gray-400'>24 فروردین 1402</div>
              </div>
            </div>
            <FlagIcon className='w-6 h-6' />
          </div>

          <div className='text-justify text-sm leading-10 mt-4 text-gray-600 cursor-pointer'>
            “متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن
            نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر
            متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن
            نظر متن نظر متن نظر”
          </div>
          <div className='flex flex-row-reverse py-1'>
            <ArcArrowLeftIcon className='w-6 h-6' />
          </div>
        </div>
        <div className='relative pt-8 mr-8 border-t'>
          <div className='absolute w-3 h-3 rounded bg-gray-300 -right-10 top-11'></div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
              <div className='w-16 h-16 rounded-2xl'>
                <img className='w-full bg-cover' src={Avatar} alt='user-img' />
              </div>
              <div>
                <div className='text-gray-700'>نام کاربر</div>
                <div className='text-sm text-gray-400'>24 فروردین 1402</div>
              </div>
            </div>
            <FlagIcon className='w-6 h-6' />
          </div>

          <div className='text-justify text-sm leading-10 mt-4 text-gray-600 cursor-pointer'>
            “متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن
            نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر
            متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن
            نظر متن نظر متن نظر”
          </div>
          <div className='flex flex-row-reverse py-1'>
            <ArcArrowLeftIcon className='w-6 h-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
