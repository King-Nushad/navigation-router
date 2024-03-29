
import './Contact.css'
import Navbar from './Navbar'

const Contact = () =>{

    return (

        <>

            <div>    <Navbar />     </div>

            

            <div className="contact">

            <h2>Contact Me</h2>

                <input type="text" placeholder="Name"></input>  <br></br> <br></br>

                <input type="email" placeholder="xyz@gmail.com"></input>  <br></br> <br></br>

                <textarea cols={20} rows={10}  placeholder="Message" maxLength={200} >   </textarea>  <br></br> <br></br>

                <button>Submit</button>


            </div>
        
        </>
    )
}

export default Contact