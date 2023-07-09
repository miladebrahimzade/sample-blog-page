import BreadCrumb from './components/BreadCrumb'
import CommentsWrapper from './components/comments/CommentsWrapper'
import SearchBar from './components/SearchBar'
import Post from './components/post/Post'
import SimilarPostsWrapper from './components/SimilarPosts/SimilarPostsWrapper'
import AuthorDetail from './components/AuthorDetail'
import ProductSuggestion from './components/productSuggestion/ProductSuggestion'
import ReadMoreWrapper from './components/readMore/ReadMoreWrapper'
import SuggestionBanner from './components/SuggestionBanner'

const BlogPage = () => {
  return (
    <div className='p-16'>
      <div className='grid grid-cols-12 justify-between gap-12 '>
        <div className='col-span-8 space-y-10'>
          <BreadCrumb route={{ path: 'blog', title: 'بلاگ' }} />
          <Post />
          <SimilarPostsWrapper />
          <CommentsWrapper />
        </div>
        <div className='col-span-4  space-y-12'>
          <SearchBar />
          <div className='p-6 space-y-12 border rounded'>
            <AuthorDetail />
            <ProductSuggestion />
            <ReadMoreWrapper />
            <SuggestionBanner />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
