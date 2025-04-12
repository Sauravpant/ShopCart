import React from 'react';
import Logo from "../../assets/images/logo.png"
import { 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaGithub,
  FaRegCopyright 
} from 'react-icons/fa';

const Footer = () => {        
    return (
        <section className="py-10 bg-gray-100 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img className="w-auto h-9" src={Logo} alt="" />
                <p className="text-base leading-relaxed text-black mt-7">ShopCart features a clean, responsive UI with intuitive navigation, smart search, and seamless user interactions across all devices for a smooth shopping experience.</p>

                <ul className="flex items-center space-x-3 mt-9">
                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <FaTwitter className="w-4 h-4" />
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <FaFacebook className="w-4 h-4" />
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <FaInstagram className="w-4 h-4" />
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <FaGithub className="w-4 h-4" />
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                <form action="#" method="POST" className="mt-6">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                </form>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          <FaRegCopyright className="inline mr-1" />
          Copyright 2025, All Rights Reserved by ShopCart
        </p>
    </div>
</section>
    )
}
export default Footer;