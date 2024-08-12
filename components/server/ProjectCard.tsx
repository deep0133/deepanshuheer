import Image from "next/image";
import RevealOnScroll from "../client/RevealOnScroll";

const ProjectCard = ({
  name,
  desc,
  image_path,
  type,
  link,
}: {
  name: string;
  desc: string;
  image_path: string | null;
  tech: string;
  type: string;
  link: string |undefined;
}) => {
  return (
    <RevealOnScroll>
      <div className='preview p-5 bg-slate-800/90 rounded-lg relative' style={{
        cursor:link? 'pointer':"auto"
      }} onClick={()=>{window.open(link,'_blank')}}>
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='inline-block w-full h-36 rounded-md object-cover'
          src={
            (image_path && image_path?.replace("./public", "")) ||
            "https://i.pinimg.com/originals/15/22/95/152295baa8c5cdf3af7e723e70a32ae3.jpg"
          }
          alt=''
          placeholder='blur'
          blurDataURL={
            (image_path && image_path?.replace("./public", "")) ||
            "https://i.pinimg.com/originals/15/22/95/152295baa8c5cdf3af7e723e70a32ae3.jpg"
          }
        />
        <span className='inline-flex absolute top-3 right-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
          {type}
        </span>
        <div className='mt-2 font-poppin space-y-2'>
          <h3 className='font-normal'>{name}</h3>
          <p className='font-light text-sm line-clamp-3'>{desc}</p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ProjectCard;
