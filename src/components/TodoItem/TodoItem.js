import './TodoItem.css'
import { Icon } from '../IconSVG/IconSVG'


function TodoItem({sText, text, complete, onComplete, onDelete}){
  return (
      <li>

        <div className='circle' onClick={onComplete}>
          <span className='Icon'>
            <Icon type='check' color={complete? 'white':'gray'}/>
          </span>
          <div className='circle fill' style={complete? {clipPath:'circle(100% at 50% 50%)'}:{}}>
          </div>
        </div>

        <p className={complete? 'complete-text':undefined}
        dangerouslySetInnerHTML={sText? {__html:text.toLowerCase().replace(sText.toLowerCase(),"<strong>"+sText.toLowerCase()+"</strong>")} : {__html:text}}></p>

        <div className='delete' onClick={onDelete}>
          <span className='Icon'>
            <Icon type='del' color="#ff4f4f"/>
          </span>
        </div>

      </li>
    )
}

export {TodoItem}