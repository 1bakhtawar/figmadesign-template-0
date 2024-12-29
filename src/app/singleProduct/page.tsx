import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Circle, Star, Tally1 } from 'lucide-react'
import RelatedComponents from '../Components/RelatedComponents'

const page = () => {
  return (
    <div>
        <nav className='flex md:space-x-8 space-x-2 w-[300px] md:w-[500px] text-center justify-center h-10 items-center font-normal md:text-base'>
            <Link href="/" className='text-[#9F9F9F]'>Home</Link>
            <ChevronRight />
            <Link href="shop" className='text-[#9F9F9F]'>Shop</Link>
            <ChevronRight />
            <Tally1 className='text-[#9F9F9F]'/>
            <Link href="/singleProduct " className='text-sm md:text-base'>Asgaard Sofa</Link>
        </nav>
        <section className='flex flex-col lg:flex-row lg:space-x-2 space-y-3 md:space-y-0 w-full lg:h-[800px] md:h-[1200px] h-[1550px] items-center justify-center content-center'>
            <div className='flex flex-col md:flex-row md:w-[650px] w-[300px] h-[1000px] md:h-[700px]'>
                <div className='w-[176px] md:h-[550px] h-[550px] place-items-center space-y-3 content-center'>
                    
                    <Image src="/outDoorsofa.png" alt="outdoorsofa" width={126} height={130} className='justify-center bg-[#FFF9E5] rounded-[10px] w-[126px] h-[130px] content-center'/>
                    <Image src="/outDoorsofa2.png" alt="outdoorsofa" width={126} height={130} className='justify-center bg-[#FFF9E5] rounded-[10px] w-[126px] h-[130px] content-center'/>
                    <Image src="/outDoorsofa3.png" alt="outdoorsofa" width={126} height={130} className='justify-center bg-[#FFF9E5] rounded-[10px] w-[126px] h-[130px] content-center'/>
                    <Image src="/outDoorsofa4.png" alt="outdoorsofa" width={126} height={130} className='justify-center bg-[#FFF9E5] rounded-[10px] w-[126px] h-[130px] content-center' />
                </div>
                <Image src="/sofa.png" alt="sofa" width={450} height={500} className='flex bg-[#FFF9E5] md:w-[450px] md:h-[600px] w-[300px] h-[500px] justify-center rounded-[10px]'/>
            </div>
            <div className='md:w-[350px] w-full  content-center pl-7 md:pl-0 h-[550px]'>
                <div>
                    <h1 className='md:w-[282px] w-full md:h-[60px] h-10 font-normal text-2xl md:text-[42px]'>Asgaard sofa</h1>
                    <p className='font-medium md:text-2xl text-lg w-44 md:w-[200px] md:h-9 h-7'>Rs. 250,000.00</p>
                    <div className='md:flex h-12'>
                    <div className='flex space-x-2 w-full md:w-7 md:h-14 h-6 content-center'> <Star /><Star /><Star /><Star />  
                     <Tally1 className='text-[#9F9F9F]'/>
                    </div><p className='text-[#9F9F9F] w-full'>5 Customer Review</p></div>
                    <p className='font-normal md:text-lg text-base md:w-[424px] w-full md:h-[120px] h-36 content-center'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                    <div className='md:w-32 w-9 h-20'>
                    <h3 className='w-7 h-8 text-[#9F9F9F] font-normal text-base'>Size</h3>
                    <div className='flex space-x-4'> 
                    <button className='w-8 h-8 rounded-[5px] bg-[#FAF4F4] text-base font-normal'>L</button>
                    <button className='w-8 h-8 rounded-[5px] bg-[#FAF4F4] text-base font-normal'>XL</button>
                    <button className='w-8 h-8 rounded-[5px] bg-[#FAF4F4] text-base font-normal'>SL</button>
                  </div>
                    </div>
                </div>
                <h3 className='w-7 h-10 text-[#9F9F9F] font-normal text-sm'>Color</h3>
                <div className='flex space-x-2 pb-4'>
                <div className='w-6 h-6 bg-[#816DFA] rounded-full'></div>
                <div className='w-6 h-6 bg-black rounded-full'></div>
                <div className='w-6 h-6 bg-[#CDBA7B] rounded-full'></div>                    
                </div>
                <div className='flex space-x-3'>
                <button className='w-[123px] h-14 border-[#9F9F9F] border-[1px] rounded-xl content-center'>- 1 +</button>
                <button className='w-[125px] h-14 border-[1px] rounded-xl border-black'>Add To Cart</button></div>
            </div>
         </section>
        

         {/* Discription section */}

            <section className='w-full lg:h-[644px] h-[1200px] content-center text-center justify-around md:justify-center place-items-center items-center border-t-[2px] border-[#9F9F9F9F]  border-b-[2px]'>
                <div className='flex flex-col md:flex-row justify-evenly w-full content-center text-center items-center h-28 md:h-7'>
                    <h1 className='font-normal md:text-2xl text-lg md:leading-7 lg:leading-[21px]'>Discription</h1>
                    <h3 className='font-normal md:text-2xl text-lg md:leading-7 lg:leading-[21px] text-[#9F9F9F] '>Additional Information</h3>
                    <h3 className='font-normal md:text-2xl text-lg md:leading-7 lg:leading-[21px] text-[#9F9F9F]'>Reviews [5]</h3>
                </div>
                <div className='space-y-5 h-96 md:h-60 w-[300px] md:w-[650px] text-center lg:w-[1000px] content-center justify-center md:space-y-0'>
                <p className='w-[300px] h-24 lg:w-[1000px] lg:h-16 font-normal font-["Poppins"] text-base md:leading-4  text-justify text-[#9F9F9F]'>
                Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p className='md:w-[650px] w-[300px] h-56 lg:h-16 lg:w-[1000px] font-normal md:leading-4 text-base text-justify text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

                </div>
                <div className='flex flex-col space-y-4 items-center lg:space-y-0 lg:flex-row lg:space-x-4 w-[300px] lg:w-[800px] lg:h-[348px] h-[700px] content-center justify-center '>
                         <Image src="/mayaSofa.png" alt="sofa" width={328} height={348} className='md:w-[500px] md:h-[340px] w-[600px] h-[300px] rounded-xl bg-[#FAF4F4] ' />
                         <Image src="/mayaSofa.png" alt="sofa" width={328} height={348} className='md:w-[500px] w-[600px] h-[300px] rounded-xl md:h-[340px] bg-[#FAF4F4]' />
                </div>
                </section>

       {/* Related Components         */}
 
                <div>
                <div className='w-full h-14 flex justify-center content-center'>
                <h1 className='font-medium text-4xl'>
                    Related Products
                </h1>
                </div>
      

               <RelatedComponents/>

               <div className='max-w-full h-12 border-b-[2px] flex justify-center content-center'><Link href="more">View More</Link></div>

                </div>

    </div>
  )
}

export default page
