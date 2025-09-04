const GetExtension = () => {
    return (
        <section className="bg-gradient-to-r from-[#FBFBFF] from-50% to-[#180CB2] to-50% w-full my-18">
            <div className="site-width relative">
                <div className="grid xl:grid-cols-3 xl:gap-4 gap-24 xl:pt-38 xl:pb-24 py-18 items-center relative">
                    <div className="relative z-1 bg-[#fbfbff] xl:text-start text-center xl:p-0 p-5 xl:rounded-0 rounded-[16px]">
                        <h2 className="h2-tag">Get the Extension.</h2>
                        <h3 className="xl:text-3xl">Power in Your Browser.</h3>
                        <p className="mt-6">Manage portfolio directly from your browser.</p>
                    </div>
                    <div className="">
                        <img
                            src="/images/extension-1.png"
                            alt="Extension Preview"
                            className="w-full max-w-[50%] mx-auto absolute left-0 top-1/2 -translate-y-1/2 xl:ml-36 xl:block hidden"
                        />
                        <img
                            src="/images/getwallet-1.png"
                            alt="Extension Preview"
                            className="w-full xl:max-w-[70%] max-w-[400px] mx-auto xl:ml-[5%]"
                        />

                        <img
                            src="/images/extension-2.png"
                            alt="Extension Preview"
                            className="w-full max-w-[12.6%]  mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/56 xl:ml-0 xl:block hidden"
                        />
                    </div>
                    <div className="etxt-white">
                        {extensions.map((extension) => {
                            return (
                                <div key={extension.name}>
                                    <img
                                        src={extension.image}
                                        alt={`${extension.name} Extension`}
                                        className="w-full 2xl:max-w-[190px] max-w-[180px] mx-auto last:mb-8"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <img
                    src="/images/extension-box.png"
                    alt="Extension Preview"
                    className="w-full max-w-[45%] mx-auto absolute right-0 top-1/2 left-0 -translate-y-1/2 -translate-x-1/4"
                /> */}
            </div>
        </section>
    );
};
export default GetExtension;


const extensions = [
    {
        name: "Firefox",
        image: "/images/firefox-extension.png",
    },
    {
        name: "Chrome",
        image: "/images/chrome-extension.png",
    },
    {
        name: "Edge",
        image: "/images/edge-extension.png",
    },
];