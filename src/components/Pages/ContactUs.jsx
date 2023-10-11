import React from "react";
import '../css/contactus.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { BsBrowserChrome } from "react-icons/bs";

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h4>Get in touch</h4><hr></hr>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name "></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email "></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number "></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button class='btn btn-primary'>Send</button>
                    </div>
                    <div className="col-md-5">
                        <h4>Contact us</h4><hr></hr>
                        <div className="mt-5">
                            <div className="d-flex">
                            <LocationOnIcon />
                            <p>Address: 198 West 21th Street,Suite 721 New York NY 10016</p>
                            </div><hr></hr>
                            <div className="d-flex">
                            <CallIcon />
                            <p>Contact: 8888888888</p>
                            </div><hr></hr>
                            <div className="d-flex">
                            <EmailIcon />
                            <p>Email: Linde@gmail.com</p>
                            </div><hr></hr>
                            <div className="d-flex">
                            <BsBrowserChrome />
                            <p>Website: https://www.linde.com/</p>
                            </div><hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;