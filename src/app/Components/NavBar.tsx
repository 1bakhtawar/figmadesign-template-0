import { Heart,Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

const NavBar = () => {
  return (
        <div>
          <div className='flex flex-col w-[100%] sm:flex-row sm:space-x-5 items-center space-x-0 bg-[#FBEBB5] md:space-y-3 space-y-0 justify-between md:h-14 place-items-baseline'>
            <ul className='md:w-[300px] md:justify-center flex space-y-3 sm:space-y-0 items-center flex-col sm:flex-row sm:space-x-5'>
              <Link href="/" className='text-black sm:text-base text-sm font-normal'>Home</Link>
              <Link href="shop" className='text-black sm:text-base text-sm font-normal'>Shop</Link>
              <Link href="myacount" className='text-black sm:text-base text-sm font-normal'>About</Link>
              <Link href="contact" className='text-black sm:text-base text-sm font-normal'>Contact</Link>
            </ul>

            
    
          <ul className='flex space-y-3 sm:space-y-0 flex-col sm:flex-row sm:space-x-5 space-x-0 items-center content-centerjustify-center place-items-baseline '>
             
       
          <Link href="/checkOutCounter"  className='w-7 h-7 text-right'><User className='w-[23.3.px] h-[18.67px]' />
             </Link>

             <li className='w-7 h-7 text-right'> <Search className='w-[23.3.px] h-[18.67px]' />
</li>
             <li className='w-7 h-7 text-right'> <Heart className='w-[23.3.px] h-[18.67px]' /></li>
             <Link href="/singleProduct"  className='w-7 h-7 text-right'><ShoppingCart className='w-[23.3.px] h-[18.67px]' />
             </Link>
             <li className='w-7 h-7 text-right'> </li>
             </ul>
         
          </div>
        </div>


















  //   <div className='w-full bg-[#FBEBB5] md:pr-5 pr-2 content-center items-center place-items-end'>
  //       <nav className='md:flex md:w-[1200px] w-[700px] pl-3 md:pl-7 justify-between content-center md:h-[100px] h-12 items-center bg-[#FBEBB5]'>
  //           <ul className='md:flex md:gap-10 gap-3 content-center'>
  //   <Link href="/" className='text-black text-sm md:text-base font-normal md:leading-6 md:font-medium text-center'>Home</Link>
  //  <Link href="shop" className='text-black text-sm md:text-base font-normal md:leading-6 md:font-medium text-center'>Shop</Link>
  //  <Link href="about" className='text-black text-sm md:text-base font-normal md:leading-6 md:font-medium text-center'>About</Link>
  //  <Link href="contact" className='text-black text-sm md:text-base font-normal md:leading-6 md:font-medium text-center'>Contact</Link>

  //           </ul>
  //           <ul className='flex gap-10 w-[247px] h-7 text-end '>
  //           <li className='w-7 h-7 text-right'> <User className='w-[23.3.px] h-[18.67px]' /></li>
  //           <li className='w-7 h-7 text-right'> <Search className='w-[23.3.px] h-[18.67px]' /></li>
  //           <li className='w-7 h-7 text-right'> <Heart className='w-[23.3.px] h-[18.67px]' /></li>
  //           <li className='w-7 h-7 text-right'> <ShoppingCart className='w-[23.3.px] h-[18.67px]' /></li>
  //           </ul>
  //       </nav>
      
  //   </div>
  )
}

export default NavBar
