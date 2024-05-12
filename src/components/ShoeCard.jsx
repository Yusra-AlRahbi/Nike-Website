

const ShoeCard = ({imgURL,cahangBigShoeImage,bigShoeImg}) => {
    const handelClick =() => {
        if (bigShoeImg !== imgURL.bigShoeImg)
        {
        
            cahangBigShoeImage(imgURL.bigShoe)
        }
    }
  
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe 
        ? 'border-coral-red'
        :'border-transparent'} cursor-pointer max-sm:flex-1
        `} 
        onClick={handelClick}
        >
            <div className="flex justify-center items-center bg-card dark:bg-card-dark dark:bg-slate-600 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                src={imgURL.thumbnail}
                alt="Shoe Collection"
                width={127}
                height={103}
                className="object-contain "
                />
            </div>
        </div>
  )
}

export default ShoeCard