import SuggestionIcon from '../icons/SuggestionIcon'
import ArrowCircleIcon from '../icons/ArrowCircleIcon'
import Product from '../../assets/img/product.svg'
import StarIcon from '../icons/StarIcon'

const ProductSuggestion = () => {
  return (
    <div>
      <div className='border-b py-4 mb-12'>
        <span className='font-medium text-lg py-4 px-2 text-gray-600 border-b border-gray-500'>
          پیشنهاد محصول برای شما
        </span>
      </div>
      <div className='relative flex justify-between items-center'>
        <div className='absolute flex gap-2 top-6 right-28 '>
          <SuggestionIcon />
          <SuggestionIcon />
          <SuggestionIcon />
        </div>

        <ArrowCircleIcon className='w-10 h-10' />
        <div className='border rounded px-8 pb-6 space-y-7'>
          <img className='my-16 mx-8' src={Product} alt='' />
          <div className='text-base text-justify text-gray-600'>
            عنوان محصول عنوان محصول عنوان محصول
          </div>
          <div className='flex flex-row-reverse items-center gap-2'>
            <StarIcon className='w-4 h-4' />
            <span className='-mb-1'>4.6</span>
          </div>
          <div className='flex justify-between items-center'>
            <button className='px-6 py-2 border rounded text-sm font-bold border-primary text-primary transition hover:border-secondary hover:bg-secondary hover:text-white '>
              مشاهده و خرید
            </button>
            <div className=''>
              <div className='line-through text-left text-base text-gray-300'>
                480,000
              </div>
              <div className='flex flex-row-reverse items-center gap-2 text-sm text-primary'>
                تومان<span className='text-xl'>460,000</span>
              </div>
            </div>
          </div>
        </div>
        <ArrowCircleIcon className='rotate-180' />
      </div>
    </div>
  )
}

export default ProductSuggestion
