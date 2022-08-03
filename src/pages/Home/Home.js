import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './home.css';

const Home = () => {
  const topic = [
    {
      name: 'Home',
    }
  ];

  const listData = [
    {
      name: 'Class',
      link: "/component/class"
    },
    {
      name: 'Function',
      link: "/component/function"
    }
  ];

  return (
    <div className='main-container'>
      <div className='main-left'>
        <Sidebar
          topic={topic}
          listData={listData}
        />
      </div>
      <div className='main-right'>

      </div>

    </div>
  )
}

export default Home
