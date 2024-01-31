// export default function TabButtons(props){
//     return <li><button>{props.children}</button></li>
// }
// Alternative way below
export default function TabButtons({children, onSelect}){
    
    return <li><button onClick={onSelect}>{children}</button></li>
}