import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Circle, X } from 'lucide-react'
import DelieverySection from '../Components/DelieverySection'

const page = () => {
  return (
    <div>
         <main className='bg-[url(/shop.jpg)] bg-cover bg-center bg-no-repeat h-[713px] ' >
                <div className='pt-[200px] w-full h-full justify-center items-center text-center'>
                <div className='flex items-center justify-center text-center'>
                    <Image src="/icon.png" alt='icon' width={100} height={100} className=''/></div>
                <h1 className='font-medium text-5xl'>Checkout</h1>
                <div className='flex justify-center text-center items-center pt-3'>
                   <Link href="/" className=''>Home</Link>
                  
                <ChevronRight />
                <div>
                    <Link href="contact" className='w-12 h-6 rotate-90'>Checkout</Link></div>
              </div> </div> </main>
{/* Billing Deatail  */}
              <section className='flex flex-col content-center justify-center md:flex-row w-[300px] md:w-full md:h-[1050px] h-[1700px]'>
                <div className='w-[300px] lg:w-[600px] md:w-[450px] place-items-center md:h-[1050px] h-[1900px]'>
                    <h1 className='md:font-semibold md:text-4xl md:h-16 h-12 text-2xl font-medium'>Billing Details  </h1>
                    <div className='flex space-x-4 md:w-[300px] lg:w-[400px] w-[250] md:h-[100px] h-[100px]'>
                      <div className='space-y-3'>
                        <h3 className='md:font-medium font-normal text-sm md:text-base'>First Name</h3>
                        <input type="text" name="Firstname" id="name" className='md:w-[150px] w-[120px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' /></div>
                        <div className='space-y-3'>
                        <h3 className='md:font-medium font-normal text-sm md:text-base'>Last Name</h3>
                        <input type="text" name="Firstname" id="name" className='md:w-[150px] w-[120px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' /></div>
                        
                    </div>
                    <div className='space-y-3 md:w-[400px] w-[250px]  md:h-[100px] justify-center place-items-center h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Company Name (Optional)</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>

                    <div className='space-y-3 md:w-[400px] w-[250px] place-items-center md:h-[100px] h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Country/Region</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>

                    <div className='space-y-3 md:w-[400px] w-[200px] place-items-center md:h-[100px] h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Streat Address</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>
                    <div className='space-y-3 md:w-[400px] w-[200px] place-items-center md:h-[100px] h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Town / City</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>
                    <div className='space-y-3 md:w-[400px] w-[200px] place-items-center h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Province</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>
                    <div className='space-y-3 md:w-[400px] w-[200px] place-items-center h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Zip Code</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>
                    <div className='space-y-3 md:w-[400px] w-[200px] place-items-center h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Phone</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>
                    <div className='space-y-3 md:w-[400px] w-[200px] place-items-center h-[100px]'>
                    <h3 className='md:font-medium font-normal text-sm md:text-base'>Email Address</h3>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    </div>
                    <input type="text" name="Firstname" id="name" className='md:w-[200px] w-[100px] h-10 border-[1px] border-[#9F9F9F] rounded-[10px] ' />
                    
                </div>
                <div className='w-[300px] content-center justify-center place-items-center md:w-[300px] lg:w-[600px] md:h-[1050px] h-[750px]'>
                  <div className='w-[250px] lg:w-[550px] md:w-[300px] h-[600px] md:h-[650px]'>
                    <div className='flex justify-between w-[270px] md:w-[300px] md:h-48 h-40 border-b-[1px] border-[#D9D9D9]'>
                      <div className='h-[150px] md:h-28'>
                        <h1 className='font-normal md:font-medium text-xl md:text-2xl h-10'>Product</h1>
                        <h3 className='flex text-[#9F9F9F] font-light md:font-normal text-sm h-6'>Asgaard sofa X 1</h3>
                        <h3 className='md:font-normal font-light text-sm md:text-base text-black h-8'>Subtotal</h3>
                        <h3 className='md:font-normal font-light text-sm md:text-base text-black '>Total</h3>
                      </div>
                      <div className='h-[100px] md:h-28'>
                        <h1 className='font-normal md:font-medium text-xl md:text-2xl h-10'>SubTotal</h1>
                        <h3 className='flex text-[#9F9F9F] font-light md:font-normal text-sm h-6'>Rs 250,000,00</h3>
                        <h3 className='flex text-[#9F9F9F] font-light md:font-normal text-sm h-6'>Rs 250,000,00</h3>
                        <h3 className='md:font-bold font-semibold text-xl lg:text-2xl text-[#B88E2F] '>Rs 250,000,00</h3>
                      </div>
                    </div>
                    <div className='pt-4 w-[200px] md:w-[300px] lg:w-[450px] md:h-72 h-72'>
                      <h1 className='flex w-52 font-light h-7 md:h-14 md:font-normal text-sm md:text-base'><Circle className="fill-black h-3 w-3 mt-2 mr-3"/>Direct Bank Transfer</h1>
                      <p className='text-[#9F9F9F] font-extralight lg:w-[500px] md:w-[300px] w-[180px]  md:font-light text-sm lg:h-24 md:h-36 h-40 md:leading-6 md:text-base'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      <h1 className='flex space-x-4 text-[#9F9F9F] font-light md:font-normal text-sm md:text-base text-center content-center w-[200px] md:w[300px] h-10'><Circle className=" border-[#9F9F9F] h-3 w-3 mt-2 mr-3"/>Direct Bank Transfer</h1>
                      <h1 className='flex space-x-2 font-light text-[#9F9F9F] md:font-normal text-sm md:text-base'><Circle className=" border-[#9F9F9F] h-3 w-3 mt-2 mr-3"/>Direct Bank Transfer</h1>
                    </div>
                    <p className='font-extralight md:font-light text-sm md:h-32 h-32 lg:w-[500px] md:[300px] w-[280px] md:leading-6 md:text-base'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                  </div>
                  <div className='w-[280] md:w-[300px] lg:w-[500px] h-12 flex justify-center'>
                  <input type="text" name="Firstname" id="name" placeholder='Place order'className='md:w-[200px] w-[100px] h-10 border-[1px] border-black rounded-[10px] text-center content-center' /></div>
                </div>


              </section>
              <DelieverySection/>

      
    </div>
  )
}

export default page
