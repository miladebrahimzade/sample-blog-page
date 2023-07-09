import React from 'react'

const PostTagBadge = ({ children }) => {
  return (
    <span className='px-8 py-2 rounded bg-gray-200 text-gray-600'>
      {children}
    </span>
  )
}

export default PostTagBadge
