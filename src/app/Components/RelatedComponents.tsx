import Image from 'next/image'


const RelatedComponents =()=>{
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
    }
];

return( 
    <div className='w-full md:h-[450px] h-[1600px] flex flex-col md:flex-row'>
        {
            products.map((product,title)=>{
             
                return(
                         <div key={product.title} className='shadow-md md:h-[450px] h-[450px] w-full md:w-[500px] cursor-pointer'>
                          <Image src={product.image} width={400} height={350} alt={product.title} className='w-[450px] h-[350px]' /> 
                        <div className='flex flex-col justify-center text-center items-center  '>
                        <h1 className='font-bold'>{product.title}</h1>
                         <span>{product.price}</span></div>
         </div>  
            
        )})
        }</div>
)}

export default RelatedComponents


