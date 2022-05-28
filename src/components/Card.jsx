
const Card = ({title, desc, img})=>{
    return <div className="card">
        <div className="card-image">
            <img src={img} alt={title} />
        </div>   
        <div className="card-content">
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <div className="card-body">
                <p>{desc}</p>
            </div>            
        </div> 
    </div>
}

export default Card