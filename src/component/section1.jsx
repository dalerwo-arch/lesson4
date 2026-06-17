import { CiMenuFries } from "react-icons/ci";
import React from 'react'

import img from "../assets/Logo (6).png"
import img1 from "../assets/Image (10).png"

import { Button } from '@mui/material'


const section1 = () => {
    return (
        <>
            <p className='md:pb-12 pb-10'></p>

            <div className='md:w-[80%] w-[90%] m-auto border-[#262626] border-[0.1iipx] rounded-[100px] bg-[#1C1C1C] flex items-center  justify-between p-3.5'>

                <img src={img} alt="" className='w-[155px] h-[40px]  ' />

                <div className='md:flex hidden items-center gap-7'>
                    <span className='text-white hover:bg-[#262626] p-2.5 rounded-2xl ' >Home</span>
                    <span className='text-white hover:bg-[#262626] p-2.5 rounded-2xl ' >Careers</span>
                    <span className='text-white hover:bg-[#262626] p-2.5 rounded-2xl ' >About</span>
                    <span className='text-white hover:bg-[#262626] p-2.5 rounded-2xl ' >Security</span>
                </div>

                <div className='md:flex hidden items-center gap-2.5'>
                    <Button disabled style={{
                        color: "white"
                    }}>Sign Up</Button>

                    <Button style={{
                        backgroundColor: "#CAFF33",
                        borderRadius: "82px",
                        color: "black",
                        width: "109px",
                        height: "45px"
                    }}>
                        Login
                    </Button>
                </div>

                <button className='lg:hidden' style={{
                    backgroundColor: "#CAFF33",
                    borderRadius: "82px",
                    color: "black",
                    width: "auto",
                    height: "auto",
                    padding: "5px"
                }}>
                    <CiMenuFries />
                </button>
            </div>


            <div className='md:w-[80%] w-[90%] m-auto bg-[#1C1C1C] mt-[53px] rounded-3xl md:flex hidden  '>

                <div className='q'>
                    <h1 className='text-white text-[58px]  '>Welcome to <span className='text-[#CAFF33]'>YourBank</span><br /> Careers!</h1>

                    <p className='text-white'>Join our team and embark on a rewarding journey in the banking industry. <br />
                        At YourBank, we are committed to fostering a culture of excellence and <br />
                        providing opportunities for professional growth. With a focus on <br />
                        innovation, customer service, and integrity, we strive to make a positive <br />
                        impact in the lives of our customers and communities. Join us today and <br />
                        be a part of our mission to shape the future of banking.</p>
                </div>

                <img src={img1} alt="" className='q1' />
            </div>


            <div className='md:w-[80%] w-[90%] m-auto md:pt-[250px] mt-[80px] '>
                <h1 className='text-white md:text-[58px] text-[28px] text-center md:text-start '>Our <span className='text-[#CAFF33]'>Values</span></h1>
                <p className='text-[#B3B3B3]'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, <br />
                    delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>


                <div className='md:flex block md:gap-[60px] '>
                    <div>
                        <div data-aos="fade-down-right" className='border-[#CAFF33] border-l-2 pl-[20px] mt-[80px]'>
                            <h1 className='text-[#4C4C4D] md:text-[58px] text-[30px] '>Integrity</h1>

                            <p className='text-[#B3B3B3]'>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We <br />
                                believe in doing what is right for our customers, colleagues, and stakeholders, even <br />
                                when faced with difficult choices.</p>
                        </div>
                        <div data-aos="fade-down-right" className='border-[#CAFF33] border-l-2 pl-[20px] mt-[80px]'>
                            <h1 className='text-[#4C4C4D] md:text-[58px] text-[30px] '>Innovation</h1>

                            <p className='text-[#B3B3B3]'>We foster a collaborative and inclusive work environment, where teamwork <br />
                                and diversity are celebrated. By leveraging the unique strengths and <br />
                                perspectives of our employees, we drive innovation and achieve greater <br />
                                success together.</p>
                        </div>
                    </div>

                    <div>
                        <div data-aos="fade-down-left" className='border-[#CAFF33] border-l-2 pl-[20px] mt-[80px]'>
                            <h1 className='text-[#4C4C4D] md:text-[58px] text-[30px] '>Customer Centricity</h1>

                            <p className='text-[#B3B3B3]'>Our customers are at the heart of everything we do. We are dedicated to <br />
                                understanding their needs, providing personalized solutions, and delivering <br />
                                exceptional service that exceeds expectations.</p>
                        </div>
                        <div data-aos="fade-down-left" className='border-[#CAFF33] border-l-2 pl-[20px] mt-[80px]'>
                            <h1 className='text-[#4C4C4D] md:text-[58px] text-[30px] '>Innovation</h1>

                            <p className='text-[#B3B3B3]'>We embrace change and constantly seek innovative solutions to meet the <br />
                                evolving needs of our customers. We encourage our employees to think <br />
                                creatively, challenge conventions, and explore new ideas to drive the future of <br />
                                banking.</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default section1
