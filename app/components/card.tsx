import "./card.css"

interface CardProps{
    title: string;
    details: string;
    img: string;
}
export default function Cards({ title, details, img }: CardProps){
    return(
        <div className="containerCard">
            <div className="Info">
                <h1>{title}</h1>
                <img src={img}/>
                <h2>{details}</h2>
            </div>
        </div>  
    )
}