import './TodoItem.css'


function TodoItem({text, complete, onComplete, onDelete}){
  return (
      <li>
        <span 
          className={`Icon Icon-check ${complete? 'Icon-check--active' : undefined}`}
          onClick={onComplete}
        >V</span>
        <p className={complete? 'complete-text':undefined}>{text}</p>
        <span className='Icon Icon-delete'
        onClick={onDelete}>X</span>
      </li>
    )
}

export {TodoItem}