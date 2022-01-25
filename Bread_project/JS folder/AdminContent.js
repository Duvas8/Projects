import React, {useState, useEffect, getState} from 'react';
import './AdminContent.css'
import { DragDropContext,Droppable, Draggable } from 'react-beautiful-dnd'; 
import {fetchOrder , deleteOrder, fetchColumns} from '../../actions/orderActions'
import { connect ,useDispatch} from 'react-redux';





function AdminContent(props)  {
    const dispatch = useDispatch();
  
    const [orders, setOrders] = useState([]);
      

    useEffect(() => {
        props.fetchOrder(setOrders)
        
    },[])

 
    const columnsFromBackend = {
        
        1: {
            columnNumber: 1,
            name: "Requested",
          items: orders,
          },
        
          2: {
            columnNumber: 2,
            name: "In Progres",
            items: [],
          },
          3: {
            columnNumber: 3,
            name: "Finished",
            items: [],
          },
          4: {
            columnNumber: 4,
            name: "Deliverd",
            items: [],
          },
    } 
const [columns, setColumns] = useState([])
console.log(columns);

  

    useEffect(() => {
        setColumns(columnsFromBackend);
       
    }, [orders, setColumns]);;
   

 
    
   
   const onDragEnd  = (result , columns, setColumns) => {
        if(!result.destination) return;
        const {source, destination} = result;
        if(source.droppableId !== destination.droppableId){
           
        const sourceColumns = columns[source.droppableId];
        const destColumns = columns[destination.droppableId];
        const sourceItems = [...sourceColumns.items];
        const destItems = [...destColumns.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        
        setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumns,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumns,
                    items:destItems
                }
            })
        } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items]
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });}
       
        
        console.log(result)
      }
   
  
console.log(columns);

// take the id of the itme/object you want to delete
const deleteItem = (item, columns, column, setColumns, index) => {
  
    const itemId = item._id
    const columnsArray = columns
    const copyColumns = [...column.items]
    const columnNumber = column.columnNumber
    console.log(columnNumber);
    copyColumns.splice(index, 1);
   console.log(columnsArray)
   setColumns( prevState => {
       return{
           ...prevState,
        ...columns,
        [columnNumber]: {    
         columnNumber: columnNumber,   
         name: column.name,
         items:copyColumns}
 
       }
           
       })
    ;
  
// use the dispatch you declared earlier with the function you import from Actions
    dispatch(deleteOrder(itemId));
   
   
};



    return(
        
        <div className="adminPageContainer"> 
        
             <DragDropContext  onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([_id, column]) => {
                    return(
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h2>{column.name}</h2>
                        <div style={{margin: 8 }}>
                        <Droppable droppableId={_id} key={_id}>
                        {(provided , snapshot) => {
                           return(
                               <div 
                               {...provided.droppableProps}
                               ref={provided.innerRef}
                               style={{
                                   background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                                   padding: 4,
                                   width: 250,
                                   minHeight: 500,
                                  
                                  
                               }}>
                                    {column.items.map((item, index) => {
                                        return(
                                            <Draggable draggableId={item._id} key={item._id}  index={index}>
                                                {(provided, snapshot) => {
                                                    return(
                                                        <div 
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: 'none',
                                                            padding: '8px',
                                                            margin: '0 0 8px 0',
                                                            minHeigth: ' 50px',
                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                            color: 'white',


                                                            ...provided.draggableProps.style
                                                            }}
                                                        >
                                                              <div>Order: {item._id}</div>
                                                              <div>Name: {" "}{item.name}</div>
                                                              <div>Phone Number:{" "}{item.phoneNumber}</div>
                                                              <div>Peckup Point:{" "}{item.peckupPoint}</div>
                                                              <div>Date: {" "}{item.createdAt}</div>
                                                              <div>Total:{" "}{item.total}</div>
                                                              <div>Cart Items:{item.cartItems.map((x) => (
                                                                <div>
                                                                {x.count} {" x "} {x.name}
                                                                </div>
                                                                ))}
                                                            </div>
                                                            <button onClick={()=>deleteItem(item, columns, column, setColumns , index)}> delete </button>
                                                        </div>
                                                    )
                                                }}

                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                               </div>
                           )}}
                   </Droppable>
                   </div>
                         
                   </div>)
                   
                })}
            </DragDropContext>
        
        
        </div>
           
       
    );
}

export default connect(
    (state) => ({
       
         orders: state.order.orders,
        cartItems: state.cart.cartItems,


    }), 
{
    fetchOrder, deleteOrder, fetchColumns
})
(AdminContent);

