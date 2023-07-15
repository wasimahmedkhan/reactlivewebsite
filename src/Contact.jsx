import React, { useState } from "react";

const Contact = () => {
  const[data,setdata] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });
  const Input = (event) => {
      const{name,value} = event.target;
      setdata((preval)=>{
        return{
          ...preval,
          [name]: value,
        }
      })
  };
  const formSubmit = (e) => {
       e.preventDefault();
       alert(`my name is ${data.fullname} and my phone no is ${data.phone}`);
  }
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-12 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your name" required name="fullname" value={data.fullname} onChange={Input}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile no" required name="phone" value={data.phone} onChange={Input}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required name="email" value={data.email} onChange={Input}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={Input}></textarea>
</div>
 <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;