// export default function TabButtons(props){
//     return <li><button>{props.children}</button></li>
// }
// Alternative way below
export default function TabButtons({children, onSelect, isSelect}){
    
    return <li><button className={isSelect ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
}