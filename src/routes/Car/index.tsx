import CarCard from '../../components/CarCard';
import CommentCard from '../../components/CommentCard ';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

export default function Car(){

    return(
        <>
        <Header />
        <CarCard />
        <CommentCard />
        <Footer />
        </>
    );
}