import { React, useState, useEffect } from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';

const productos = [
    {
        id: '0',
        title: 'CAMISETA TERCER UNIFORME RIVER PLATE',
        description: 'Un nuevo look que incorpora el pasado. Los jugadores de River Plate usan esta camiseta adidas de fútbol mientras dominan en la casa de sus rivales. Creada para mantener cómodos a jugadores y hinchas, está hecha de tejido suave y absorbente. Luce "El Más Grande" y el escudo del club para animarte en todo momento.',
        price: '4000',
        pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/65176e99f2dd4f23b91eab1400f78fbb_9366/Camiseta_Tercer_Uniforme_River_Plate_Blanco_FH7901_01_laydown.jpg',
        initial: '0',
        stock: '8',
    },
    {
        id: '1',
        title: 'CAMPERA 3 TIRAS RIVER PLATE',
        description: 'Un look clásico para un club clásico. El River Plate ha formado parte del universo futbolístico desde 1901, y esta campera adidas celebra cada uno de los momentos que lo convierten en un equipo histórico. Presenta un diseño con detalles auténticos del club como la famosa banda diagonal característica del uniforme y puños acanalados que mantienen las mangas en su lugar y brindan comodidad.',
        price: '6000',
        pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/055ae748cff74a7d889cabad00f6da29_9366/Campera_3_Tiras_River_Plate_Negro_FQ7692_21_model.jpg',
        initial: '0',
        stock: '30',
    },
    {
        id: '2',
        title: 'CAMISETA VISITANTE RIVER PLATE 20/21',
        description: 'De local. De visitante. Unidos. La famosa banda roja del River Plate se luce en esta llamativa camiseta de visitante del River Plate. Esta es la camiseta que usan los jugadores cuando juegan lejos de El Monumental, manteniéndolos secos gracias a su tejido absorbente. Una versión tejida del escudo del club destaca tu amor por el fútbol.',
        price: '8000',
        pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6614e5b671604374ba57ac400028a7be_9366/Camiseta_Visitante_River_Plate_20-21_Rojo_FQ7662_01_laydown.jpg',
        initial: '0',
        stock: '12',
    },
    {
        id: '3',
        title: 'CHOMBA 3 TIRAS RIVER PLATE',
        description: 'Blanco. Rojo. Negro. Tu mundo del fútbol en tres colores. Destacá tu devoción al River Plate cada vez que te ponés esta chomba de adidas. Incorpora tecnología de absorción AEROREADY que mantiene seca tu piel y luce las clásicas 3 Tiras de adidas en los hombros y el escudo del club tejido para un look único.',
        price: '5500',
        pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ab52d8fe1ab84e23896aad2501324645_9366/Chomba_3_Tiras_River_Plate_Rojo_GK6512_01_laydown.jpg',
        initial: '0',
        stock: '16',
    },
    {
        id: '4',
        title: 'SHORTS LOCAL RIVER PLATE 20/21',
        description: 'Estos shorts de local del River Plate de adidas lucen los mismos colores y look que los que usan los jugadores cuando dominan en el campo de El Monumental. Tienen un corte clásico que te permite moverte con comodidad, sin importar si estpas en la cancha o en las tribunas. Lucen el escudo del club con orgullo arriba del dobladillo.',
        price: '3200',
        pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cc82db4d73f24d228339ac72015bb38a_9366/Shorts_Local_River_Plate_20-21_Negro_FQ7665_01_laydown.jpg',
        initial: '0',
        stock: '33',
    }
];

function ItemList () {

    const [items, setItems] = useState([]);
    
    useEffect(
        () => {
        setTimeout(async () => {
            setItems(productos);
        }, 1000);
        },
    );

    return (
        <>
            {items.map(producto => {
                const { id, title, description, price, pictureUrl, stock, initial } = producto;
                return (
                <Item
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    pictureUrl={pictureUrl}
                    stock={stock}
                    initial={initial}/>
                    );
            })};
        </>
    );
}

export default ItemList;