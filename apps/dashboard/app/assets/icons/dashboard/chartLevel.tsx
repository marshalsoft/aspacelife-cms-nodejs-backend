export const ChartLevel = ({color,size}:{size?:number,color?:string})=>{
    return <svg width={size?size:"18px"} height={size?size:"18px"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3.375V9H16.875V5.2998L10.125 12.0498L6.75 8.6748L0.817383 14.5986L0.0263672 13.8076L6.75 7.0752L10.125 10.4502L16.0752 4.5H12.375V3.375H18Z" fill={color?color:"black"} />
    </svg>    
}