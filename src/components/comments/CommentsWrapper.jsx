import React from 'react'
import MessageIcon from '../icons/MessageIcon'
import { ReactComponent as AddMessageIcon } from '../../assets/icons/addMessage.svg'
import Comment from './Comment'

const CommentsWrapper = () => {
  return (
    <div className='px-8'>
      <div className='mt-4 flex items-center gap-4 px-2 py-4'>
        <MessageIcon className='w-6 h-6' />
        <span className='text-2xl text-gray-600'>نظرات</span>
      </div>
      <div className='space-y-8 divide-y-2'>
        {/* Load each comment */}
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className='px-14 py-6 mt-4 flex justify-center items-center gap-2 text-primary border border-primary rounded hover:bg-primary hover:text-white transition cursor-pointer'>
        <AddMessageIcon className='fill-current' />
        <span>نظر خود را درباره این مطلب بنویسید</span>
      </div>
    </div>
  )
}

export default CommentsWrapper
