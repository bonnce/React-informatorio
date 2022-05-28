import Card from "../components/Card"
import Header from "../components/Header"

const HomePage = () => {
    return <div className='container column gap-lg'>
                <Header content='Actividad 2 😎'/>
                <div className="container align-top gap-md wrap">
                <Card title='Ejemplo 1' 
                desc='Este es el ejemplo mas bueno de la página ya que posee una gran cantidad de contenido lo que permite ver como se moldea respecto al contenedor'
                img='https://pbs.twimg.com/media/EmeP8jVW8AEtW2j.jpg' />
                <Card title='Ejemplo 2' 
                desc='Este es el ejemplo que habla del sol de la arena y de las olas y tiene un estribillo que se te pega, que se te pega y nunca despega'
                img='https://static5.depositphotos.com/1011268/465/i/450/depositphotos_4659453-stock-photo-beach-umbrella.jpg' />
                <Card title='Ejemplo 3' 
                desc='Este es el ejemplo no le hace falta tener una gran cantidad de contenido para ser el mejor'
                img='https://i.ytimg.com/vi/TcPIQap8ZXg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBjMUnIyec7ffKr9S86gbWVk8Wlvw' />
                </div>
                
            </div>
}

export default HomePage