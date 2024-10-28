import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtag} = blog;
    return (
        <div>
            <img className='w-full h-full rounded-md' src={cover} alt={`my blog picture${title}`} />
            <div className='flex justify-between items-center my-4'>
                <div className='flex items-center gap-2'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>              </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=> handleAddToBookmarks(blog)}
                    className='text-red-600 text-2xl ml-3 '
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 >{title}</h2>
            <p>
                {hashtag}
            </p>
            <button
             onClick={()=> handleMarkAsRead(id,reading_time)}
            className='text-purple-900 font-bold underline mb-3'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;