export default function Button({children,color}){
    return(
        <button className={`bg-[#F22D36] px-4 py-2 rounded text-white hover:scale-110 transition ease-in-out duration-300`}>
            {children}
        </button>
    )
}