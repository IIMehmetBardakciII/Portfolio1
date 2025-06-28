type PropsType={
  href:string;
  title:string;
}
const HoverTextAnimationSecondary = ({href,title}:PropsType) => {
 return (
    <a href={href} className="hover_textSecondary span" data-text={title}>
      <span>{title}</span> 
    </a>
    
  );

}

export default HoverTextAnimationSecondary