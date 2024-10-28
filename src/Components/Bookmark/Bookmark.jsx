import PropTypes from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-white m-4 rounded-xl p-2'>
            <h3 className=''>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;