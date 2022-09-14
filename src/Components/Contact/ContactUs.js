import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import contact from '../../Assets/contactus.png'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ContactUs = () => {

    const formControl = e => {
        e.preventDefault();

        const firstName = e.target.fname.value;
        const lastName = e.target.lname.value;
        const email = e.target.email.value;
        const message = e.target.msg.value;

        if (firstName === "" || lastName === "" || email === "" || message === "") {

            Swal.fire(
                'Alert!!',
                'You might not have remembered to add massages.',
                'info'
            );

            e.target.reset();

        } else {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Message Sent Successfully',
                showConfirmButton: false,
                timer: 2000
            })

            e.target.reset();

        }
    }

    return (
        <section className='mx-auto max-w-screen-xl px-3 my-28'>

            <PageTitle title="Contact Us" />

            <div className='bg-white p-7 rounded-lg shadow-lg'>
                <h1 className='lg:text-5xl text-3xl text-center lg:leading-relaxed font-semibold capitalize'>How can we help?</h1>
                <p className='text-center lg:w-2/5 mx-auto my-5'>While we’re good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</p>

                <div className='flex justify-center mt-7'>
                    <button className='btn text-white capitalize mx-3'>Frequently Asked Questions</button>
                    <Link to="/terms-and-conditions" className='btn text-white capitalize mx-3'>Privacy Policy</Link>
                </div>

            </div>

            <div className='lg:w-[1196px] sm:block lg:flex justify-around items-center mx-auto mt-24 lg:mt-0 lg:h-screen'>

                <img src={contact} className="lg:w-[45%] drop-shadow-xl mb-10 lg:mb-0" alt="" />

                <div className=' sm:w-full lg:w-[60%] sm:ml-0 mt-5 lg:mt-0 lg:ml-10'>
                    <form onSubmit={formControl}>
                        <div className='flex justify-between items-center'>
                            <input type="text" name='fname' placeholder="First Name" className="input input-bordered text-[#0B1B28] p-4 bg-[#FFF9F9] w-full mr-2" />
                            <input type="text" name='lname' placeholder="Last Name" className="input input-bordered text-[#0B1B28] p-4  bg-[#FFF9F9] w-full ml-2" />
                        </div>
                        <br />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered text-[#0B1B28] p-4 bg-[#FFF9F9] w-full" />
                        <br />
                        <input type="text" name='msg' placeholder="Message" className="textarea mt-5 h-44 textarea-bordered text-[#0B1B28] p-4 bg-[#FFF9F9] w-full" />
                        <input type="submit" className='btn w-full text-white mt-5' value="Submit" />
                    </form>
                </div>

            </div>

        </section>
    );
};

export default ContactUs;