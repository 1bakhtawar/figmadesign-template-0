import Image from 'next/image'

const FourProducts = () => {
    
  return (
    <div>
        <main className='w-[1440px] h-[777px] bg-[#FFFFFF] justify-center'>
            <h1 className='text-center ml-[150px] items-center justify-center w-full pt-28 font-medium text-4xl leading-[54px] text-black'>Top Picks For You</h1>
            <p className='flex ml-[150px] w-full h-6 font-medium text-base leading-6 items-center justify-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>

            <div className='w-full flex flex-wrap justify-center gap-24'>
                <div className='w-[287px] h-[372px]'>
                    <div className='h-[240px] w-[287px] p-2 flex flex-col items-center justify-center'>
                        <Image src="/product1.png" alt="seater" width={300} height={300} />
                    </div>
                    <div className='flex flex-col p-2 font-normal w-[194px] h-[71px]'><h1 className='w-[194px] h-6'>Trenton modular sofa_3</h1>
                    <p className='text-2xl mt-4 w-[200px] h-9'>$Rs. 25,000.00</p></div>
                </div>
                <div className='w-[287px] h-[372px]'>
                    <div className='h-[240px] w-[287px] p-2 flex flex-col items-center justify-center'>
                        <Image src="/product02.png" alt="seater" width={300} height={300} />
                    </div>
                    <div className='flex flex-col p-2 font-normal ml-[50px] w-[212px] h-24'><h1 className='w-[212px] h-12'>Granite dining table with dining chair</h1>
                    <p className='text-2xl mt-4 w-[200px] h-9'>$Rs. 25,000.00</p></div>
                </div>
                <div className='w-[287px] h-[372px]'>
                    <div className='h-[240px] w-[287px] p-2 flex flex-col items-center justify-center'>
                        <Image src="/product3.png" alt="seater" width={300} height={300} />
                    </div>
                    <div className='flex flex-col p-2 font-normal ml-[50px] w-[212px] h-24'><h1 className='w-[212px] h-12'>Outdoor bar table and stool</h1>
                    <p className='text-2xl mt-4 w-[200px] h-9'>$Rs. 25,000.00</p></div>
                </div>
                <div className='w-[287px] h-[372px]'>
                    <div className='h-[240px] w-[287px] p-2 flex flex-col items-center justify-center'>
                        <Image src="/product4.png" alt="seater" width={300} height={300} />
                    </div>
                    <div className='flex flex-col p-2 font-normal ml-[50px] w-[199px] h-24'><h1 className='w-[158px] h-9'>Plain console with teak mirror</h1>
                    <p className='w-[199px] h-12 text-2xl mt-4'>$Rs. 25,000.00</p></div>
                </div>

            </div>
            <div className='w-[115px] h-12 font-medium text-xl leading-7 pt-20 ml-[800px] items-center justify-center'>
                View More
            </div>
        </main>
      
    </div>
  )
 }

export default FourProducts
