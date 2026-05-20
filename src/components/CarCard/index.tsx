import './styles.css';
import carImg from '../../assets/car-card.svg';

export default function CarCard(){
    return(
        <>
            <div className="car-card">
                <img src={carImg} alt="Car" />
            
            {/* <div className="car-card-description">
                <h3>Moda da casa</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                    harum voluptatem ad fugit id distinctio fugit id distinctio.
                </p>
                <h4>$ 80,00</h4>
            </div> */}
                 <h4>Lorem ipsum dolor</h4>
            </div>
        </>
        
    );
}