export default function ClubCard({name, desc, imgSrc, link}){ 

    return (
      <div onClick={() => window.open(link, '_blank')} class="relative max-w-xs cursor-pointer overflow-hidden rounded-3xl shadow-xl border-indigo-900 border transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out">
          <img src={imgSrc} alt="" class=""/>
          <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
            <div class="p-4 text-white font-['Inter']">
              <div class="text-xl font-bold mb-2 font-['Inter']">{name}</div>
              <div>{desc}</div>
            </div>
          </div>
      </div>
    )
  }