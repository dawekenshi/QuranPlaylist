export default function Playlist() {
    return (
        <main className="pb-[5vh] bg-slate-900 min-h-[100vh] max-h-[100%] flex justify-center items-center">
            <div className="gap-[5vh] flex pt-[8vh] flex-col px-[5vw] w-[80vw] h-[100%]">
                <iframe
                    height="300" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1415113648&color=%2322a25a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
                <iframe height="300" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1255015546&color=%2322a25a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        </main>
    )
}
