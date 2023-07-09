import PostContent from './PostContent'
import { ReactComponent as LikeIcon } from '../../assets/icons/heart.svg'
import { ReactComponent as ShareIcon } from '../../assets/icons/share.svg'
import { ReactComponent as SaveIcon } from '../../assets/icons/save.svg'
import PostTagBadge from './PostTagBadge'
import PostTitle from './PostTitle'

const Post = () => {
  return (
    <>
      <PostTitle />
      <PostContent />
      <div className='mx-8 pb-4 flex justify-between items-center border-b'>
        <div className='flex items-center gap-4'>
          <PostTagBadge>تگ 1</PostTagBadge>
          <PostTagBadge>تگ 2</PostTagBadge>
          <PostTagBadge>تگ 3</PostTagBadge>
        </div>
        <div className='flex items-center gap-4'>
          <ShareIcon className='cursor-pointer stroke-current text-gray-500 hover:text-primary transition' />
          <SaveIcon className='cursor-pointer stroke-current text-gray-500 hover:text-primary transition' />
          <LikeIcon className='cursor-pointer fill-current text-gray-500 hover:text-primary transition' />
        </div>
      </div>
    </>
  )
}

export default Post
