import Image from 'next/image'
import { ChevronRight, Fullscreen, LaptopMinimal } from 'lucide-react'
import Link from 'next/link'
import DelieverySection from '../Components/DelieverySection'



const page = () => {
    const product={ image: 'string', title: 'string', price: 'string' }

    const products =[
        {
            image: "/product1.png",
            title: "Trenton modular sofa_3",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/product02.png",
            title: "Granite dining table with dining chair",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/product3.png",
            title: "Outdoor bar table and stool",
            price:  "$Rs. 25,000.00"   
        },
        {
            image: "/product4.png",
            title: "Plain console with teak mirror",
            price:  "$Rs. 25,000.00"
        },
         {
            image: "/table1.png",
            title: "Grain Coffee Table",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/table2.png",
            title: "Kent coffee table",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/table3.png",
            title: "Round coffee table_color-2",
            price:  "$Rs. 25,000.00"   
        },
        {
            image: "/table4.png",
            title: "Reclaimed teak coffee table",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/sidetable1.png",
            title: "Plain Console_",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/sidetable2.png",
            title: "Reclaimed tea side table",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/sidetable3.png",
            title: "SJP-0825",
            price:  "$Rs. 25,000.00"   
        },
        {
            image: "/sidetable4.png",
            title: "Bella chair and table",
            price:  "$Rs. 25,000.00"
        },
      {
            image: "/tabl.png",
            title: "Granite square side table",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/sofa.png",
            title: "Asghard Sofa",
            price:  "$Rs. 25,000.00"
        },
        {
            image: "/mayaSofa.png",
            title: "Maya sofa three seater",
            price:  "$Rs. 25,000.00"   
        },
        {
            image: "/outDoorsofa.png",
            title: "Outdoor Sofa Set",
            price:  "$Rs. 25,000.00"
        }
    ];



  return (
    <div>
        <section className='w-full h-[716px] text-center justify-center '>
          <main className='bg-[url(/shop.jpg)] bg-cover bg-center bg-no-repeat h-[713px] ' >
                <div className='pt-[200px] w-full h-full justify-center items-center text-center'>
                <div className='flex items-center justify-center text-center'>
                    <Image src="/icon.png" alt='icon' width={100} height={100} className=''/></div>
                <h1 className='font-medium text-5xl'>Shop</h1>
                <div className='flex justify-center text-center items-center pt-3'>
                   <Link href="/" className=''>Home</Link>
                  
                <ChevronRight />
                <div>
                    <Link href="shop" className='w-12 h-6 rotate-90'>Shop</Link></div>
              </div> </div> </main>

        </section>
        <section className='flex flex-col space-y-0 md:space-y-0 md:flex-row w-full md:h-24 h-24 bg-[#e4e3e3] justify-between content-center items-center'>
      
      
          <p className='flex font-normal text-base'> <LaptopMinimal /> Showing 1–16 of 32 results</p>
          <div className='flex space-x-6'>
            <p className='font-normal text-xl md:leading-7'>Show</p>
            <p className='md:w-[55px] w-12 md:h-[55px] h-8 flex items-center justify-center text-center bg-white text-[#9F9F9F]'>16</p> </div>

         
          <div className='flex items-center space-x-6 '>
            <p className='font-normal text-xl'>Short By</p>
            <div className='flex md:w-[188px] w-24 md:h-[55px] h-6 items-center justify-center bg-white text-[#9F9F9F]'>Default</div>

          </div>

        </section>
                
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 md:h-[3000px] lg:h-[1600px] content-center w-full lg:gap-8 justify-center h-[5600px] '>
               {
                products.map((product,title)=>{                 
                        return(
                                 <div key={product.title} className='place-items-center content-center justify-center shadow-md md:h-[350px] h-[350px] w-full md:w-[300px] cursor-pointer'>
                                  <Image src={product.image} width={250} height={250} alt={product.title} className='lg:w-[250px] md:w-[200px] h-[250px] justify-center content-center place-items-center' /> 
                                <div className='flex flex-col justify-center text-center items-center  '>
                                <h1 className='font-bold'>{product.title}</h1>
                                 <span>{product.price}</span></div>
                 </div>  
                    
                )})
                }
        </div>
        <DelieverySection/>
  
</div>)}

export default page
