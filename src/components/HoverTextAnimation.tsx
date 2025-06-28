type PropsType={
  href:string;
  title:string;
}
const HoverTextAnimation = ({href,title}:PropsType) => {
 return (
    <a href={href} className="hover_text span" data-text={title}>
      <span>{title}</span> 
    </a>
    
  );

}

export default HoverTextAnimation