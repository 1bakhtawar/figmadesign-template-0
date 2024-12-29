import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock5, MapPin, Phone } from 'lucide-react'
import DelieverySection from '../Components/DelieverySection'

const page = () => {
  return (
    <div>
         <section className='max-w-full h-[716px] text-center justify-center '>
          <main className='bg-[url(/shop.jpg)] bg-cover bg-center bg-no-repeat h-[713px] ' >
                <div className='pt-[200px] max-w-full h-full justify-center items-center text-center'>
                <div className='flex items-center justify-center text-center'>
                    <Image src="/icon.png" alt='icon' width={100} height={100} className=''/></div>
                <h1 className='font-medium text-5xl'>Contact</h1>
                <div className='flex justify-center text-center items-center pt-3'>
                   <Link href="/" className=''>Home</Link>
                  
                <ChevronRight />
                <div>
                    <Link href="contact" className='w-12 h-6 rotate-90'>Contact</Link></div>
              </div> </div> </main>

        </section>

        <section className='md:h-[810px] h-[1200px] w-full justify-items-center md:pt-10 '>
            <div className='md:w-[750px] w-[300px] md:h-36 -[200px] content-center justify-center '>
                <h1 className='md:font-semibold font-medium md:text-4xl text-2xl md:leading-10 text-center'>Get In Touch With Us</h1>
                <p className='text-[#9F9F9F] font-normal text-base text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                
                <div className='flex flex-col md:flex-row justify-center w-full content-center md:h-[600px] h-[500px] pt-16'>
                    <div className='lg:w-[1093px] md:w-[600px] w-[300px] h-[557px]'>
                    <div className='md:w-[400px] w-[300px] h-28'>
                        <div className='flex gap-4'>
                        <MapPin />
                        <h1 className='font-medium text-2xl'>Address</h1></div>
                        <p className='font-normal text-base leading-6'>236 5th SE Avenue, New York NY10000, United States</p>
                     </div>

                     <div className='w-[300px] h-28'>
                        <div className='flex gap-4'>
                        <Phone className='fill-black' />                      
                         <h1 className='font-medium text-2xl'>Phone</h1></div>
                        <p className='font-normal text-base leading-6'>Mobile: +(84) 546-6789
                        Hotline: +(84) 456-6789</p>
                     </div>

                     <div className='w-[300px] h-28'>
                        <div className='flex gap-4'>
                        <Clock5 />                
                        <h1 className='font-medium text-2xl'>Working Time</h1></div>
                        <p className='font-normal text-base leading-6'>Monday-Friday: 9:00
                             - 22:00
                        Saturday-Sunday: 9:00 - 21:00</p>
                     </div>
                    <div>
                    </div></div>

               <div className="md:w-[535px] w-[300px] h-[103px]">
                    <form className="md:w-[531px] w-[300px] h-[804px]">
                        <div>
                       Your Name : <br /><br />
                       <input type="text" className="border-[1px] border-[#9F9F9F] rounded-[10px] h-16 md:w-[400px] w-[300px] pl-2 md:pl-5"  placeholder='abc' />
                       </div><br />
                       <div>
                       Email Address : <br /><br />
                       <input type="text" className="border-[1px] border-[#9F9F9F] rounded-[10px] h-16 w-[300px] md:w-[400px] md:pl-5 pl-2"  placeholder='Abc@def.com' /></div><br />
                       <div>
                       Subject : <br /><br />
                       <input type="text" className="border-[1px] border-[#9F9F9F] rounded-[10px] h-16 w-[300px] md:w-[400px] md:pl-5 pl-2"  placeholder='This is an optional' /></div><br />
                       <div>
                       Message : <br /><br />
                       <input type="text" className="border-[1px] border-[#9F9F9F] rounded-[10px] h-20 w-[300px] md:w-[400px] md:pl-5 pl-2"  placeholder='Hi! i had like to ask about' /></div><br />
                       <button className='border-[1px] rounded-[15px] w-[237px] h-12 font-normal text-base border-black'>Submit</button>

                    </form>
                    </div>

                    </div>
                 </div>
               

        </section>
<DelieverySection/>
      
    </div>
  )
}

export default page
