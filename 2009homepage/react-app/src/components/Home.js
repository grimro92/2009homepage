import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="base">
      {/* 左側のナビゲーションバー */}
      <div className="hidari">
        <nav className="menu">
          <ul>
            <li><Link to="/profile">プロフィール</Link></li>
            <li><Link to="/blog">ブログ</Link></li>
          </ul>
        </nav>
      </div>

      {/* 右側のコンテンツエリア */}
      <div className="migi">
        {/* ここにリンク先のコンポーネントが表示される */}
        aaaaaa
        <Outlet />
        bbbbbb
      </div>
    </div>
  );
}

export default Home;
