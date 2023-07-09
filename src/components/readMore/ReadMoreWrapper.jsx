import ReadMorePost from './ReadMorePost'

const ReadMoreWrapper = () => {
  return (
    <div>
      <div className='border-b py-4 mb-12 '>
        <span className='font-medium text-lg py-4 px-2 text-gray-600 border-b border-gray-500'>
          بیشتر بخوانید
        </span>
      </div>
      <div className='divide-y space-y-6'>
        <ReadMorePost />
        <ReadMorePost />
        <ReadMorePost />
        <ReadMorePost />
      </div>
    </div>
  )
}

export default ReadMoreWrapper
