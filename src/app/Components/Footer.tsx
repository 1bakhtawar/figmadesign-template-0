import Link from "next/link"

const Footer = () => {
  return (
    <div className='bg-gray-200'>
        <section className='w-full md:h-[250px] h-[350px] bg-[#FFFFFF] '>
            <div className='md:flex-row md:space-x-10 space-y-5 md-space-y-0 justify-center h-[300px] md:h-[222px] w-full'>
                <div className='w-full h-9 text-[#9F9F9F] md:font-normal content-center text-center font-light md:text-base text-sm md:leading-6'>
                    <h1 className=''>400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA</h1>
                </div>
                <div className='flex md:space-x-4 space-x-3 justify-evenly md:h-[250px] h-[250px]'>                       <ul className='space-y-7'>
                         <div className='flex flex-col space-y-4'>
                          <h1 className="text-[#9F9F9F]">Links</h1>
                            <Link href='/'>Home</Link>
                            <Link href='/shop'>Shop</Link>
                            <Link href='/myacount'>About</Link>
                            <Link href='/contact'>Contact</Link></div>
                        </ul>
                          <ul className='space-y-7'>
                            <li className='text-[#e9baba]'>Help</li>
                            <Link href='/checkOutCounter'>Payment Options</Link>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>
                    <div className='md:w-[202px] items-left content-center md:content-start w-[200px] '>
                     
                            <h3 className='text-[#9F9F9F] md:text-sm text-xs pb-3 md:pb-0'>NewsLetter</h3>
                            <div className='md:flex-row flex-col space-y-6 md:text-sm text-xs md:space-y-4 md:space-x-5 md:pt-7'>
                            <p className='text-[#9F9F9F] border-b-2  border-black'>Enter Your Email Address</p>
                            <p className='border-b-2 border-black'>Subscribe</p>
                            </div>
                    </div>
                </div>
            <div className='border-t-4 h-8'>2022 Meubel House. All rights reverved</div>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
