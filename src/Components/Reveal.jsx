import React,{useEffect,useRef}from"react";

const Reveal=({children,direction="left"})=>{
const ref=useRef(null);

useEffect(()=>{
const observer=new IntersectionObserver(([entry])=>{
if(entry.isIntersecting){
ref.current.classList.add("show");
}else{
ref.current.classList.remove("show");
}
},{threshold:0.15});

if(ref.current){
observer.observe(ref.current);
}

return()=>observer.disconnect();
},[]);

return(
<div
ref={ref}
data-direction={direction}
className="reveal"
>
{children}
</div>
);
};

export default Reveal;