import { Calendar, ChevronRight, Tag, User} from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DelieverySection from '../Components/DelieverySection'

const page = () => {
  return (
    <div>
         <section className='max-w-full h-[716px] text-center justify-center '>
          <main className='bg-[url(/shop.jpg)] bg-cover bg-center bg-no-repeat h-[713px] ' >
                <div className='pt-[200px] max-w-full h-full justify-center items-center text-center'>
                <div className='flex items-center justify-center text-center'>
                    <Image src="/icon.png" alt='icon' width={100} height={100} className=''/></div>
                <h1 className='font-medium text-5xl'>Blog</h1>
                <div className='flex justify-center text-center items-center pt-3'>
                   <Link href="/" className=''>Home</Link>
                  
                <ChevronRight />
                <div>
                    <Link href="blog" className='w-12 h-6 rotate-90'>Blog</Link></div>
              </div> </div> </main>

        </section>

        <section className='flex justify-center max-w-full h-[2490px]'>
          <div className='w-[820px] h-[2490px]'>
  {/* section1 */}
            <div >
              <Image src="/blog1.png" alt="blogImage" width={817} height={500} className='rounded-xl ' />
              <div className='w-[349px] h-6 flex space-x-6 text-[#9F9F9F] font-normal text-base leading-6 pt-3'>
              <User className='fill-[#9F9F9F]' /><h1>Admin</h1>
              <Calendar className='fill-[#9F9F9F]'/><h1>Admin</h1>
              <Tag className='fill-[#9F9F9F]'/><h1>Admin</h1>
              </div>
              <div className='w-[820px] h-[200px] pt-6'>
                <h1 className='w-[517px] h-[45px] font-medium text-3xl leading-10 text-[Poppins]'>
                  Going all-in with millennial design</h1>
                  <p className='font-normal text-sm leading-[22px] justify-center text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <h3 className='w-[89px] h-9 border-b-[1px] border-black'>Read more</h3>
              </div>
               </div>
{/* section2 */}
               <div >
              <Image src="/blog2.png" alt="blogImage" width={817} height={500} className='rounded-xl ' />
              <div className='w-[349px] h-6 flex space-x-6 text-[#9F9F9F] font-normal text-base leading-6 pt-3'>
              <User className='fill-[#9F9F9F]' /><h1>Admin</h1>
              <Calendar className='fill-[#9F9F9F]'/><h1>Admin</h1>
              <Tag className='fill-[#9F9F9F]'/><h1>Admin</h1>
              </div>
              <div className='w-[820px] h-[200px] pt-6'>
                <h1 className='w-[517px] h-[45px] font-medium text-3xl leading-10 text-[Poppins]'>
                Exploring new ways of decorating</h1>
                  <p className='font-normal text-sm leading-[22px] justify-center text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <h3 className='w-[89px] h-9 border-b-[1px] border-black'>Read more</h3>
              </div>
               </div>
{/* section3 */}
               <div >
              <Image src="/blog3.png" alt="blogImage" width={817} height={500} className='rounded-xl ' />
              <div className='w-[349px] h-6 flex space-x-6 text-[#9F9F9F] font-normal text-base leading-6 pt-3'>
              <User className='fill-[#9F9F9F]' /><h1>Admin</h1>
              <Calendar className='fill-[#9F9F9F]'/><h1>Admin</h1>
              <Tag className='fill-[#9F9F9F]'/><h1>Admin</h1>
              </div>
              <div className='w-[820px] h-[200px] pt-6'>
                <h1 className='w-[517px] h-[45px] font-medium text-3xl leading-10 text-[Poppins]'>
                Handmade pieces that took time to make</h1>
                  <p className='font-normal text-sm leading-[22px] justify-center text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <h3 className='w-[89px] h-9 border-b-[1px] border-black'>Read more</h3>
              </div>
               </div> </div>
{/* category */}
               <div className='w-[393px] h-[537px] pt-10 pl-20'>
                <input type="search" className='w-[311px] h-[58px] rounded-[10px] border-[1px] border-[#9F9F9F] ' />
                
                <div className='pt-5 w-[251px] h-[353px]'>
                  <h1 className='w-[134px] h-9 font-medium text-2xl leading-9 text-black'>Categories</h1>
                  <div className='w-[251] h-[348px] flex justify-between pt-6'>
                  <ul className='space-y-6'>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>Crafts</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>Design</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>Handmade</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>Interior</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>Wood</li>
                  </ul>

                  <ul className='space-y-6'>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>2</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>8</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>7</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>1</li>
                    <li className='font-normal text-base leading-6 text-[#9F9F9F]'>6</li>
                  </ul>
                  </div>
{/* main div  */}
                  <div className='w-[393px] h-[650px] space-y-5 '>
  {/* div1  */}
    <div className='flex space-x-4 w-[250px] h-20'>
      <Image src="/recentpost1.png" alt="img1" width={80} height={80} className='rounded-[10px]'/>
    <div >
      <h1 className='w-[130px] h-14 font-normal text-sm leading-5'>Going all-in with millennial design</h1>
      <h3 className='w-[119px] h-4 font-normal text-xs leading-[18px]'>03 Aug 20</h3>
    </div>
    </div>
    {/* div2 */}
    <div className='flex space-x-4 w-[250px] h-20'>
      <Image src="/recentpost2.png" alt="img1" width={80} height={80} className='rounded-[10px]'/>
    <div >
      <h1 className='w-[130px] h-14 font-normal text-sm leading-5'>Exploring new ways of decorating</h1>
      <h3 className='w-[119px] h-4 font-normal text-xs leading-[18px]'>03 Aug 20</h3>
    </div>
    </div>
    {/* div3 */}
    <div className='flex space-x-4 w-[250px] h-20'>
      <Image src="/recentpost3.png" alt="img1" width={80} height={80} className='rounded-[10px]'/>
    <div >
      <h1 className='w-[130px] h-14 font-normal text-sm leading-5'>Handmade pieces that took time to make</h1>
      <h3 className='w-[119px] h-4 font-normal text-xs leading-[18px]'>03 Aug 20</h3>
    </div>
    </div>
    {/* div4 */}
    <div className='flex space-x-4 w-[250px] h-20'>
      <Image src="/recentpost4.png" alt="img1" width={80} height={80} className='rounded-[10px]'/>
    <div >
      <h1 className='w-[130px] h-14 font-normal text-sm leading-5'>Modern home in Mila</h1>
      <h3 className='w-[119px] h-4 font-normal text-xs leading-[18px]'>03 Aug 20</h3>
    </div>
    </div>
    {/* div5 */}
    <div className='flex space-x-4 w-[250px] h-20'>
      <Image src="/recentpost5.png" alt="img1" width={80} height={80} className='rounded-[10px]'/>
    <div >
      <h1 className='w-[130px] h-14 font-normal text-sm leading-5'>Colorful office redesign</h1>
      <h3 className='w-[119px] h-4 font-normal text-xs leading-[18px]'>03 Aug 20</h3> </div>
    </div>
    {/* div5 end  */}
    </div> 
    
     </div>
 </div>
{/* End  */}


 </section>


        <DelieverySection />

    </div>
  )
}

export default page
