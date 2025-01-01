import Image from 'next/image'
import RelatedComponents from './RelatedComponents'
import AsghardSofa from './AsghardSofa'
import Blogs from './Blogs'
import Instagram from './Instagram'

const HeroSection = () => {
  return (
    <div>
         <section className='w-full md:h-[800px] h-[500px] content-center md:content-between justify-items-center bg-[#FBEBB5]'>
            <div className='flex md:flex-row flex-col justify-between w-full md:w-full md:h-[800px] lg:h-[800px] h-[500px] text-black'>
                <div className='space-y-6 w-[300px] md:w-[400px] content-center md:justify-items-center'>
                <h1 className='md:font-medium font-normal text-center md:text-4xl text-2xl '>Rocket single seater</h1>
                <p className='md:h-[49px] text-center md:font-medium font-normal md:leading-9 md:text-2xl md:text-center text-1xl md:border-b-[1px] border-black'>Shop Now</p></div>
                <div className='w-[50%] justify-center'>
                <Image src="/seater1.png" alt="seater" width={400} height={400} className='md:w-[500px] lg:w-[700px] md:h-[700px] lg:h-[800px] w-[300px] h-[500px]'/></div>
            </div>
            </section>
            {/* two products section */}
             <section className='flex flex-col md:flex-row w-[100%] md:h-[550px] h-[1000px] bg-[#FAF4F4]'>
                        <div className='w-[100%] md:w-[50%] place-items-center text-center md:h-[550px] h-[800px]'>
        
                          <Image src="/tabl.png" alt="sidetable" width={400} height={400} className='w-[450px] h-[400px]'/>
                           <div className='w-[100%] text-center place-items-center justify-center'>
                           <h1 className='md:w-[182px] w-[100%] md:font-medium font-normal md:text-4xl text-2xl md:leading-[54px] text-black'>Side Table</h1>
                           <p className='md:w-[125px] w-[100%]'>View More</p>
                         
                            
                            </div>

                        </div>
                      
                        <div className='w-[100%] md:w-[50%] place-items-center text-center md:h-[550px] h-[800px]'>
        
        <Image src="/seater2.png" alt="sidetable" width={400} height={400} className='md:w-[450px] w-[300px] h-[400px]'/>
         <div className='w-[100%] text-center place-items-center justify-center'>
         <h1 className='md:w-[182px] w-[100%] md:font-medium font-normal md:text-4xl text-2xl md:leading-[54px] text-black'>Side Table</h1>
         <p className='md:w-[125px] w-[100%]'>View More</p>
       
          
          </div>

      </div>
                    </section>


{/* Top Pick For You (Section) */}


                    <main className='w-[100%] md:h-[100px] h-[100px] bg-[#FFFFFF] justify-center'>
            <h1 className='text-center items-center justify-center w-full md:font-medium font-normal md:text-5xl text-2xl space-y-4 md:space-y-0 md:leading-[54px] text-black'>Top Picks For You</h1>
            <p className='flex w-[100%] md:h-10 h-16 md:font-medium font-normal text-base md:leading-6 items-center justify-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </main>
         
          <div>
            <AsghardSofa/>
          </div>
          <div className='md:h-[610px] h-[1550px]'>
            <Blogs/>
          </div>
  
           <div className='md:h-[460px] h-[400px]'>
            <Instagram/>
           </div>
      
      
    </div>
  )
}

export default HeroSection