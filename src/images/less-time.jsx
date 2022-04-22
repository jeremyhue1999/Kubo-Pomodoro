import { useState } from "react"

export default function LessTime({ fill, hoverFill, className }) {

  const [svgFill, setSvgFill] = useState(fill)
  
  return (
    <span 
      className={`${className} cursor-pointer w-8`} 
      onMouseOver={() => setSvgFill(hoverFill)} 
      onMouseOut={() => setSvgFill(fill)}
    >
      <svg viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2" stroke={svgFill} strokeWidth="4"/>
        <path d="M18 34C26.8366 34 34 26.8366 34 18" stroke={svgFill}  strokeWidth="4"/>
        <rect x="18" width="4" height="4" fill={svgFill}/>
        <rect x="32" y="16" width="4" height="2" fill={svgFill}/>
        <rect x="16" y="9" width="3" height="12" fill={svgFill}/>
        <rect x="16.0094" y="20.9975" width="3" height="9.92387" transform="rotate(-49.758 16.0094 20.9975)" fill={svgFill}/>
        <rect x="26" y="7" width="16" height="4" fill={svgFill}/>
      </svg>
    </span>
    
  )
}