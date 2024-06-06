import image from '../assets/Images/Rectangle 2.png'

const Home = () => {
    return (
      <section>
        <div className='home-container'>
        <div className="home-text">
      <h1>
        Hungry for Something <br />
       <span>Delicious?</span> <br />
       We've Got You Covered!

      </h1>
      </div>
      <div className="row-2">
        <img src={image} alt="" />
      </div>

        </div>
        <div className='call-to-action'>
        <button>View Menu</button>
        <button className='btn-2'>Book a Table</button>

        </div>
        
      
    

      </section>
      
    )
  }
  
  export default Home