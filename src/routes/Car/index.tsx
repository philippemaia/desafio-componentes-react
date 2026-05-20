import CarCard from '../../components/CarCard';
import CommentCard from '../../components/CommentCard ';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

export default function Car(){

    return(
        <>
        <Header />
        <section id="cars">
        <div className="container">
            <h2>Venha nos visitar</h2>
            <CarCard />
            <CarCard />
        </div>
        </section>
        <section id="comments">
            <div className="container">
            <h2>O que estão dizendo</h2>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            </div>
        </section>
        <Footer />
        </>
    );
}