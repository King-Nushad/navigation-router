
import Navbar from "./Navbar"
const Form = () => {

    const [userData, setUserData] = setState({

        firstname: "",
        lastname: "",
        email: "",
        password:"",
        imageData: ""
    })

    const formChangeHandler = (event) => {
        const { name, value, file} = event.target;
        setUserData((previousData) => ({
            ...previousData,
            [name]: name === 'imageData' ? URL.createObjectURL(file[0]) : value,

        }));

    };

    const formInputHandler = (event) => {
        event.preventDefault();
        console.log(userData);

    }



    return(

        <>

            
            <div>    <Navbar />     </div>

            <form onSubmit={formInputHandler}>

                <input type="text" placeholder="Firstname" name="firstname" value={userData.firstname} onChange={formChangeHandler}> </input> <br></br>
                <input type="text" placeholder="Lastname" name="lastname" value={userData.lastname} onChange={formChangeHandler}></input> <br></br>
                <input type="email" placeholder="Email" name="email" value={userData.email} onChange={formChangeHandler}></input> <br></br>
                <input type="password" placeholder="Password" name="password" value={userData.password} onChange={formChangeHandler}></input> <br></br>
                <input type="file" placeholder="Select image" name="imageData" onChange={formChangeHandler}></input>
                
                <button type="Submit"></button>

               





            </form>
        
        </>
    )
    
}

export default Form