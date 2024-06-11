import HomeTitle from "../../Components/SectionTitle/HomeTitle";

const Gallery = () => {

    const galleryImages= [
        {
          "name": "Rolling Machine",
          "url": "https://i.ibb.co/VgChGwk/rolling-machine.png"
        },
        {
          "name": "Electric Arc",
          "url": "https://i.ibb.co/cQ23yMM/electric-arc.png"
        },
        {
          "name": "Heat Treatment Plant",
          "url": "https://i.ibb.co/8K2rqZ7/heat-treatment-plant.png"
        },
        {
          "name": "MS Plate",
          "url": "https://i.ibb.co/ryH25dw/ms-plate.png"
        },
        {
          "name": "Seamless Tube",
          "url": "https://i.ibb.co/jzWs8gz/seamless-tube.png"
        },
        {
          "name": "External Furnace",
          "url": "https://i.ibb.co/MNmRP3k/Golden-Standerd-External-Furnace-Wastage-Jhut-Fired-Steam-Boiler.png"
        }
      ]


    return (
        <div className="py-24">
          <HomeTitle title={'Gallery'}></HomeTitle> 
           <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 lg:gap-3">
           {
            galleryImages.map(galleryImage=>
                <div key={galleryImage.url}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                 className="card  bg-base-100 shadow-xl">
                <figure><img src={galleryImage.url} alt="Images" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {galleryImage.name}
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Gallery</div>
                    </div>
                </div>
            </div>
            )
           }
           </div>
        </div>
    );
};

export default Gallery;