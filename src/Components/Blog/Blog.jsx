import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtag} = blog;
    return (
        <div>
            <img className='w-full h-full' src={cover} alt={`my blog picture${title}`} />
            <div className='flex justify-between items-center my-4'>
                <div className='flex items-center gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                </div>
            </div>
            <h2 >{title}</h2>
            <p>
                {hashtag}
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;