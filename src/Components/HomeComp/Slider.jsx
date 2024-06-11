
const Slider = () => {
    const  images= [
        "https://i.ibb.co/rxFdkVH/Golden-Standard-Vertical-Two-Pass-Gas-or-Oil-Fired-Steam-Boiler.png",
        "https://i.ibb.co/6yLbZLb/Golden-Standard-Horizontal-Three-Pass-Gas-or-Oil-Fired-Steam-Boiler.png",
        "https://i.ibb.co/YbGGTQY/Golden-Standerd-Internal-Furnace-Wastage-Jhut-Fired-Steam-Boiler.png",
        "https://i.ibb.co/m6q0p3B/Our-Products.png",
      ]
    return (
        <div className="pt-20 " >
            <div className="carousel w-full  ">
                <div id="item1" className="carousel-item w-full">
                    <img src={images[0]} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={images[1]} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={images[2]} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={images[3]} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-3/5 mx-auto py-2 gap-2">
                <a href="#item1" className="btn btn-xs"> <img src={images[0]} className="w-20" /></a>
                <a href="#item2" className="btn btn-xs"><img src={images[1]} className="w-20" /></a>
                <a href="#item3" className="btn btn-xs"><img src={images[2]} className="w-20" /></a>
                <a href="#item4" className="btn btn-xs"><img src={images[3]} className="w-20" /></a>
            </div>
        </div>
    );
};

export default Slider;