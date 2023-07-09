import SearchIcon from '../components/icons/SearchIcon'
const SearchBar = () => {
  return (
    <div className='flex items-center gap-2 px-4 py-3 border border-gray-200 bg-gray-50 rounded'>
      <SearchIcon className='w-4 h-4' />

      <input
        type='text'
        className='w-full bg-transparent text-gray-600 outline-none'
        placeholder='جستجو در بلاگ'
      />
    </div>
  )
}

export default SearchBar
