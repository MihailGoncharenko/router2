import React from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Shift from './shift';
import Posts from './posts';
import Select from './select';

export default function App() {
  return (
    <div>
      <HashRouter>

        <nav>
          <div>
            <Link to="/posts/new">
              <button>Создать пост</button>
            </Link>
          </div>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/new" element={<Shift title={'Создание'}/>} />
            <Route path="/posts/:id" element={<Select />} />
            <Route path="*" element={<Posts />} />
          </Routes>
        </div>

      </HashRouter>
    </div>
  );
}