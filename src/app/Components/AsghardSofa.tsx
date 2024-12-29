import Image from 'next/image'
import Link from 'next/link'


const AsghardSofa = () => {
  return (
    <div>
        <section className='flex flex-col space-y-3 md:space-y-0 md:flex-row content-center items-center justify-center w-full md:h-[500px] bg-[#FFF9E5] h-[900px]'>
            <div>
                <Image src="/sofa.png" alt="sofa" width={600} height={600} className='md:h-[600px] md:w-[600px] h-[500px] w-[400px] '/>
            </div>
            <div className='w-[300px] h-[300px] content-center place-items-center'>
                <h3 className='w-[149px] text-center md:h-9 h-5'>New Arrivals</h3>
                <Link href="singleProduct" className='w-[331px] h-[72px] md:text-5xl text-3xl text-center font-semibold md:font-bold md:leading-[72px]'>Asgaard sofa</Link>
                <button className='w-[200px] md:w-[255px] md:h-16 h-12 border-[2px]'>Order Now</button>
            </div>
        </section>
      
    </div>
  )
}

export default AsghardSofa
