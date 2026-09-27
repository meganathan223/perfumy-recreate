import perfume1 from '../assets/one.jpg';
import perfume2 from '../assets/two.jpg';
import perfume3 from '../assets/three.jpg';


function Product() {
    return (
        <div className="products">
            <div className="box">
                <img src={perfume1} alt="perfume1" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sit?</p>
            </div>
            <div className="box">
                <img src={perfume2} alt="perfume2" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sit?</p>
            </div>
            <div className="box">
                <img src={perfume3} alt="perfume3" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sit?</p>
            </div>
        </div>
    )
}

export default Product;