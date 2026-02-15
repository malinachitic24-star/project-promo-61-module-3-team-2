import { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom"
const Detalle = () => {
    // Con el hook useLocation primero obtengo la ruta actual
    const { pathname } = useLocation();
    // Con el matchPath compruebo si la ruta actual coincide con /product/:productId
    const routeData = matchPath('create/:id', pathname);

    const [card, setCard] = useState()

    useEffect(() => {
        const loadData = async () => {
        const response = await (
            await fetch("https://hp-api.onrender.com/api/characters")
        ).json();
        setCard(response.find(e => e.id === routeData.params.id));
        };
        loadData();
    }, [routeData])
    return <div>{card ? <div>Detalle del proyecto {card.id}</div> : <div>Card no encontrada</div>}</div>
}

export default Detalle