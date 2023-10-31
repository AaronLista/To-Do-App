import {ReactComponent as Check} from './check.svg';
import {ReactComponent as Del } from './delete.svg';

function Icon({type,color}){
    return(
        type ==='check'?
        <Check width='24px' fill={color}/>:
        <Del width='24px' fill={color}/>
    )
}

export {Icon}

