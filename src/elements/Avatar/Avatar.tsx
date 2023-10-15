

type AvatarProps = {
     imageSrc: string,
     size?: number
}
export const Avatar = (props: AvatarProps) => {
  return (
    <div className='w-full h-full cursor-pointer'>
        <span className={`w-${props.size} h-${props.size}`}>
            <img src={props.imageSrc} className="w-14 h-14 rounded-full border-4 border-[f2f2f2]" />
        </span>
    </div>
  )
}
