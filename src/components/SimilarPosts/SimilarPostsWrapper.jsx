import React from 'react'
import SimilarPost from './SimilarPost'

const SimilarPostsWrapper = () => {
  return (
    <div className='pb-8 px-8 border-b'>
      <div className='mb-8 text-2xl text-gray-600'>مطالب مرتبط</div>
      <div className='flex gap-12 items-center overflow-x-hidden'>
        <SimilarPost />
        <SimilarPost />
        <SimilarPost />
      </div>
    </div>
  )
}

export default SimilarPostsWrapper
