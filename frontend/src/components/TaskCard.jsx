

function TaskCard({task,onEdit,onDelete}) {
    const canEdit:boolean=!!onEdit;
    const canDelete:boolean=!!onDelete;
}

return <div
className={`task-card ${canEdit ? 'task-card-clickable':""}`}
onClick={onClick?()=>onEdit(task):undefined}

></div>