import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './layouts/Home'
import Playlist from './layouts/Playlist'
import { Link } from 'react-router-dom'

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/playlist" element={<Playlist />}></Route>
                <Route path="*" element={<main className='h-screen flex items-center justify-center bg-slate-900 text-[4vw] flex-col text-white'><h1>Not Found - Error 404</h1><Link className="text-[3vw] mt-[2vh] text-gray-500 underline hover:text-gray-700" to="/">Go Home</Link></main>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
