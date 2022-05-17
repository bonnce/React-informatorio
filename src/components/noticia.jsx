const Noticia = ()=>{
    const DATA = {
        title:'Messi',
        description: 'Recientes pruebas en los entrenamientos han demostrado que ¡Messi es arquero! 😱😱😱'
    }
    const {title , description} = DATA
    return <div className="card">
        <div className="card-header">
            <h2>{title}</h2>
        </div>
        <div className="card-body">
            <p>{description}</p>
        </div>
            
    </div>
}

export default Noticia