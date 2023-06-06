import { useNavigate } from "react-router-dom";

export default function Home() {

    let navigate = useNavigate();
    function playlistRedirect() {
        let path = `playlist`;
        navigate(path);
    }

    return (
        <>
            <main className="flex justify-center items-center bg-slate-900 h-screen">
                <div className="h-[80vh] w-[80vw] text-white flex flex-col justify-center items-center text-[5vw]">
                    <h1 className="mb-[6vh]">Welcome to my Quran playlist</h1>
                    <p className="text-[2.5vw] mb-[6vh]">My favourite compilation of Quran songs</p>
                    <button onClick={playlistRedirect} type="button" className="w-[9vw] h-[6vh] flex justify-center items-center text-white text-[1.2vw] font-semibold rounded-lg bg-green-600 hover:bg-green-700 focus:ring-green-800">
                        Playlist
                        <svg aria-hidden="true" className="w-10 h-6 ml-[0.5vw]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                    </button>
                </div>
            </main>
        </>
    )
}