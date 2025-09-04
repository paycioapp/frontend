const UCPIVideo =()=> {
    return (
        <section className="pt-4 pb-10">
            <div className="relative w-full h-full max-w-[1200px] mx-auto border-2 border-[#f1f1f1] p-[48px] rounded-[30px]"> {/* 16:9 aspect ratio */}
                <video
                  className="relative top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source 
                    src="/images/ucpi-dapp-video1.mp4" 
                    type="video/mp4" 
                  />
                </video>
              </div>
        </section>
    )
}

export default UCPIVideo;

//ucpi video