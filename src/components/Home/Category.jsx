import Marquee from "react-fast-marquee";

const Category = () => {
    return (
        <Marquee direction="right" onFinish="left">
            <div className="flex">
                <img className="w-96 h-56 mx-5" src="https://i.ibb.co/27BdqqL2/different-type-sports-equipment-collection-illustration-vector.jpg" alt="" />
                <img className="w-96 h-56 mx-5" src="https://i.ibb.co/gMpyCmHd/display-of-assorted-types-of-sports-equipment-B2-WXND.jpg" alt="" />
                <img className="w-96 h-56 mx-5" src="https://i.ibb.co/0RhnM9xN/set-of-different-sport-equipment-on-white-background-2-N3-BYD1.jpg" alt="" />
                <img className="w-96 h-56 mx-5" src="https://i.ibb.co/RWsrD3k/stock-photo-set-with-different-sports-equipment-on-white-background-active-lifestyle-2021436080.jpg" alt="" />
                <img className="w-96 h-56 mx-5" src="https://i.ibb.co/C55xBpbN/stock-vector-group-of-sport-equipment-427725592.jpg" alt="" />
            </div>
        </Marquee>
    );
};

export default Category;