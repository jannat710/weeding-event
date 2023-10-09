

const ServiceSectionCard = ({ services }) => {
    const { name, image, price, details } = services;
    return (
        <div>
            <div className="card w-full h-72 max-w-7xl mx-auto  bg-base-100 shadow-xl image-full font-display">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-emerald-100 normal-case">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;