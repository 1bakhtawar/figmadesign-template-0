import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
         <main className='bg-[url(/shop.jpg)] w-full bg-cover bg-center bg-no-repeat h-[713px] ' >
                <div className='content-center w-full h-full justify-center items-center text-center'>
                <div className='flex items-center justify-center text-center'>
                    <Image src="/icon.png" alt='icon' width={100} height={100} className='w-[100px] h-[100px]'/></div>
                <h1 className='font-medium text-5xl'>My Acount</h1>
                <div className='flex justify-center text-center items-center pt-3'>
                   <Link href="/" className=''>Home</Link>
                  
                <ChevronRight />
                <div>
                    <Link href="shop" className='w-12 h-6 rotate-90'>My Acount</Link></div>
              </div> </div> </main>

   {/* Login And Register Section             */}
              <section className='flex flex-col md:flex-row w-full justify-center place-items-center content-center items-center md:h-[500px] h-[1000px]'>
              <div className='md:w-[330px] lg:w-[500px] lg:pl-5 md:h-[450px] justify-center h-[500px] w-[300px] content-center'>
                <h1 className='w-[107px] h-[54px] font-medium text-2xl md:text-4xl md:font-semibold'>Log In</h1>
                <div className='md:w-[330px] lg:w-[500px] w-[250px] h-[120px] space-y-2'>
                    <p>Username or email address</p>
                    <input type="text" name="email" id="email" className='border-[#9F9F9F] w-[250px] border-[1px] rounded-[10px] h-10' />
                     </div>
                     <div className='space-y-2 lg:w-[500px] md:w-[330px] w-[300px] h-[100px] '>
                    <p>Password</p>
                    <input type="number" name="password" id="number" className='border-[#9F9F9F] w-[250px] border-[1px] rounded-[10px] h-10' />
                     </div>
                     <div className='flex gap-4 md:w-[330px] lg:w-[500px] w-[300px] text-center content-center pt-5 h-[100px]'>
                     <input type="number" name="password" id="password" className='border-[#9F9F9F] h-7 w-[40px] border-[1px] rounded-[7px]'/>
                        <h1 className='md:font-normal font-light md:text-base text-center text-sm'>Remember me</h1>
                     </div>
                     <div className='flex justify-center text-center content-center w-[250px] h-[100px]'>
                        <input type="number" name="password" id="password" placeholder='Login' className='border-[#9F9F9F] w-[100px] text-center text-black border-[1px] h-8 rounded-[7px]'/>
                        <h1 className='md:font-light font-extralight text-xs pt-2 w-[150px] md:h-[100px] text-center'>Lost Your Password?</h1>

                     </div>
              </div>
              <div className='md:w-[330px] lg:w-[500px] md:h-[450px] h-[400px] w-[300px] '>
              <h1 className='w-[107px] h-[54px] font-medium text-2xl md:text-4xl md:font-semibold'>Register</h1>

              <div className='md:w-[330px] lg:w-[500px] w-[300px] md:h-[100px] h-[100px] space-y-2'>
                    <p>Email address</p>
                    <input type="text" name="email" id="email" className='border-[#9F9F9F] w-[250px] border-[1px] rounded-[10px] h-10' />
                     </div>
                     <div className='font-light text-base md:w-[330px] w-[300px] h-[200px]'>
                        <p className='md:space-y-4'>A link to set a new password will be sent to your email address.</p>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>
                     </div>
                   
                        <input type="number" name="password" id="password" placeholder='Register' className='border-[#9F9F9F] w-[100px] text-black text-center border-[1px] h-8 rounded-[7px]'/>
                       

                  
                
              </div>

              </section>
      
    </div>
  )
}

export default page
