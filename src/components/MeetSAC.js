export default function SACCard({name, title, imgSrc}){ 

  return (
    <div class="w-[12.5rem] h-[12.5rem] relative max-w-xs mx-2 flex flex-shrink overflow-hidden rounded-3xl shadow-x transition-transform hover:scale-105 duration-200 ease-in-out">
        <img src={imgSrc} alt="" class=""/>
        <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-transparent to-transparent">
          <div class="p-4 text-white font-['Inter']">
            <div class="text-wrap font-bold mb-2 font-['Inter']">{name}</div>
            <div class="text-sm ">{title}</div>
          </div>
        </div>
    </div>
  )
}