import React from "react"

export default function Form() {
    const [nameData, setNameData] = React.useState({
        firstName: "",
        lastName: ""
    })
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    function handleChange(event) {
        setNameData((prev)=>{
            return {
                ...nameData,
                [event.target.name]: event.target.value
            }
        }) 
    }
    
    return (
        <div>
        <form>
            <input
                type="text"
                placeholder="First Name"
                /// this name should match the state object property defined above.
                name="firstName"
                onChange={handleChange}
            />
             <input
                type="text"
                placeholder="Last Name"
                 /// this name should match the state object property defined above.
                name="lastName"
                onChange={handleChange}
            />
        </form>
        
        <p>{`${nameData.firstName} ${nameData.lastName}`}</p>
        </div>
        
    )
}
