import React ,{ useState, useEffect }  from 'react'
import contactimg from '../assets/contactimg.jpg'

function Contact() {
  const initialValues = {name:"",message:"",email:""}
  const [formValues,setFormValues]= useState(initialValues);
  const [formsErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const handleChange = (e) => {
      console.log(e.target.value)
    //  if (e.target.value !== ""){
      const { name:name ,value:value } = e.target;
          const timeOut =  setTimeout(() => setFormValues( {...formValues, [name]:value} ));
         // clearTimeout(timeOut);
     //   }
    
     // setFormValues({...formValues, [name]:value});
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
     // setFormValues(initialValues)
      
  };

  useEffect(() =>{
     /* if (isSubmit){
        const timeOut =  setTimeout(() => setFormValues({ initialValues }), 1000);
        clearTimeout(timeOut);
      }*/

      if(Object.keys(formsErrors).length === 0 && isSubmit ){
          
          console.log(formValues);
      }

  },[initialValues ,isSubmit]);

  const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.name){
          errors.name = "Name is required!";
      }
      if(!values.message){
          errors.message = "message is required!";
      }
      if(!values.email){
          errors.email = "email is required!";
      } else if (!regex.test(values.email)){
          errors.email = "email not valid!";
      }

      return errors;
  }
  return (
    <div className="row col-sm-6 col-md-6 col-lg-4 " style={{minHeight:'601px',width: '100%'}}>
         
          <div className='col-lg-4'>
             <img src={contactimg} style={{height: '70%', marginTop: '20%'}}/>
          </div>

      <div className="heading_container heading_center col-lg-8"style={{marginTop: '5%'}}>
               <h2>
                  Contact <span>us</span>
                 </h2>
          <div className="d-flex justify-content-center text-center" >
            
            <form className="" onSubmit={handleSubmit}>
                <label htmlFor="name" >Name</label>
                <p className="text-danger">{ formsErrors.name }</p>
                <input type="text" placeholder="Name"  name="name" onChange="send" className="form-control"
                 value={ isSubmit ? initialValues.name : formValues.name} onChange={handleChange}  />
                <br/>
                <label htmlFor="email" >email</label>
                <p className="text-danger" >{ formsErrors.email }</p>
                <input type="email" placeholder="email"  name="email" onChange="send" className="form-control"
                 value={ isSubmit ? initialValues.email : formValues.email} onChange={handleChange} />
                <br/>
                <label htmlFor="message" >message</label>
                <p className="text-danger" >{ formsErrors.message }</p>
                <input type="text" placeholder="message"  name="message" onChange="send" className="form-control"
                 value={ isSubmit ? initialValues.message : formValues.message} onChange={handleChange} />
                <br/>
                <input type="submit" className = "btn btn-success" name="send" value="send" />
            </form>
            <br/>
        </div>
      </div>
    </div>
  )
}

export default Contact
