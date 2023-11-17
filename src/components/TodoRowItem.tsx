import React from 'react'

//CHANGED EXPORT TO EXPORT CONST
//ADDED TYPE FOR TODOROWITEMS, WHICH WE ARE RETURNING REACT.FC (FUNCTIONAL COMPONENT)
//MOVED THE PROPS TO BE WITHIN FC<{}>
//EQUALS TO PROPS AND THEN RETURN

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteTodo: Function
}> = (props) => {

  return (
    <>
         <tr onClick={() => props.deleteTodo(props.rowNumber)}>
          <th scope = "row">{props.rowNumber}</th>
          <td>{props.rowDescription}</td>
          <td>{props.rowAssigned}</td>
        </tr>
    </>
  )
}
