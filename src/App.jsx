import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks =(blog) => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) => {
    setReadingTime(readingTime + time)
    // remove 
    // console.log('remove form id',id)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);

   }

  return (
    <>
      
     <Header></Header>
     <main className='container mx-auto md:flex mt-5 '>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}
     handleMarkAsRead={handleMarkAsRead} ></Blogs>
     <Bookmarks 
     bookmarks={bookmarks}
     readingTime={readingTime}
     ></Bookmarks>
     </main>
      
      
    </>
  )
}

export default App
