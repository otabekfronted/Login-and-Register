import videoBg from "../assets/videoBG.mp4";

function Main() {
    return (
        <>
            <div className=" min-h-full relative auth-left">
                <video
                    src={videoBg}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover absolute top-0 left-0"
                ></video>
            </div>
        </>
    );
}

// export default Main;
