const Home = () => {

    const handleClick = ()=> {
        console.log('hi bro')
    }
    const handleClickAgain = (name)=> {
        console.log('hello there')
    }
    return(
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleClickAgain}>Click Me Again</button>

        </div>
    )
}

export default Home;