import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile';
import Blog from './components/Blog';
import './App.css';

function App() {
  // const [message, setMessage] = useState('');
  // const [blog, setBlog] = useState({ title: '', date: '', content: '' });

  // const getBlog = () => {
  //   fetch('/api/blog')
  //     .then(response => response.json())
  //     .then(data => setBlog(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }

  // useEffect(() => {
  //   // fetch('/api')
  //   //   .then(response => response.json())
  //   //   .then(data => setMessage(data.message));
  //   fetch('/api/blog')
  //   .then(response => response.json())
  //   .then(data => setBlog(data))
  //   .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>{message}</p>
    //     <h1>{blog.title}</h1>
    //     <p>{blog.date}</p>
    //     <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    //   </header>
    // </div>
    <Router>
      <Routes>
        {/* Homeが親レイアウト */}
        <Route path="/" element={<Home />}>
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
