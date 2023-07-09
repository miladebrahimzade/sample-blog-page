import bannerImg from '../assets/img/blog/post-img-placeholder.png'

const SuggestionBanner = () => {
  return (
    <div className='relative'>
      <img className='w-full rounded' src={bannerImg} alt='' />
      <div className='absolute text-left left-10 top-20'>
        <div className='uppercase text-sm font-bold mb-5'>Tasty healthy</div>
        <div className='uppercase mb-20 text-xl font-semibold'>
          Fresh vegetables
        </div>
        <button className='uppercase pt-2 pr-2 border-t-2 text-sm font-bold border-lime-900 text-lime-900'>
          Shop now
        </button>
      </div>
    </div>
  )
}

export default SuggestionBanner
