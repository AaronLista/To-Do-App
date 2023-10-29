import './TodoItem.css'


function TodoItem({sText, text, complete, onComplete, onDelete}){
  return (
      <li>
        <span 
          className={`Icon Icon-check ${complete? 'Icon-check--active' : undefined}`}
          onClick={onComplete}
        >V</span>
        <p className={complete? 'complete-text':undefined}
        dangerouslySetInnerHTML={{__html:text.toLowerCase().replace(sText,"<strong>"+sText+"</strong>")}}></p>
        <span className='Icon Icon-delete'
        onClick={onDelete}>X</span>
      </li>
    )
}

export {TodoItem}