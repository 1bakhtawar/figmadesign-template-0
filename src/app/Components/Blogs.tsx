import Image from 'next/image'
import { Calendar, Clock5 } from 'lucide-react'
import Link from 'next/link'

const Blogs = () => {
    const product={ image: 'string', title: 'string', price: 'string' }

    const products =[
        {
            image: "/blog1.png",
            title: "Going all-in with millennial design",
            more: "Read More",
            time: " 5 min",
            date: "12th Oct 2022"
        },

        {
            image: "/blog2.png",
            title: "Going all-in with millennial design",
            more: "Read More",
            time: " 5 min",
            date: "12th Oct 2022"
        }, 
        
        {
            image: "/blog3.png",
            title: "Going all-in with millennial design",
            more: "Read More",
            time: " 5 min",
            date: "12th Oct 2022"
        },
    ]
  return (
    <div className='md:h-[610px] h-[1550px]'>
        <section className='justify-center text-center items-center w-full h-[1500px] md:h-[560px]'>
            <div className='md:h-[91px] h-[200px] items-center text-center content-center'>
                <Link href='/blog'className='md:h-14 md:font-medium font-normal text-2xl md:text-4xl md:leading-[54px]'>Our Blogs</Link>
                <p className='md:h-6 text-[#9F9F9F] md:font-medium font-normal md:text-base text-xs md:leading-6'>Find a bright ideal to suit your taste with our great selection</p>
            </div>

             <div className=' md:h-[400px] content-center w-full lg:gap-8 md:gap-6 justify-center h-[1200px] flex flex-col md:flex-row'>
                    {
                        products.map((product,title)=>{
                            return(
                                     <div key={product.title} className='md:h-[400px] h-[650px] md:w-[350px]'>
                                      <Image src={product.image} width={350} height={350} alt={product.title} className='w-[350px] h-[350px]' /> 
                                    <div className='flex flex-col space-y-2 justify-center text-center items-center  '>
                                    <h1 className='font-bold'>{product.title}</h1>
                                     <span className='border-b-2 border-black'>{product.more}</span>
                                     <div className='flex text-gray-400'>
                                        <span className='flex'><Clock5 />{product.time}</span>
                                        <span className='flex'><Calendar/>{product.date}</span>
                                     </div></div>
                     </div>                     
                    )})
                    }</div>
                     </section>
                     <div className='text-center'>
                       <span className='border-b-2 border-black content-center text-center '>
                            View All Post
                        </span>
                       </div>
             </div>   ) }
  export default Blogs
                   