import React, {useState, useEffect} from 'react';
import './AdminContent.css'
import { DragDropContext,Droppable, Draggable } from 'react-beautiful-dnd'; 
import {fetchOrder } from '../../actions/orderActions'
import { connect} from 'react-redux';




function AdminContent(props)  {


   
    const [orders, setOrders] = useState([]);
    
 
    useEffect(() => {
        props.fetchOrder(setOrders)
       
      
    },[])

 console.log(orders);
    const columnsFromBackend = {
        newOrder: {
          name: "Requested",
          items: orders,
        },
        r: {
            name: "r",
            items: [],
          },
    } 
const [columns, setColumns] = useState(columnsFromBackend)


  
  

 


   

  


const onDragEnd = ""
    
   /* const testColumns = [...columns];
     = (result , columns, setColumns) => {
        if(!result.destination) return;
        const {source, destination} = result;
        const column = columns[source.droppableId];
        const copiedItems = [...column.items]
        
        const removed = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
        
        console.log(result)
      }*/
   
  
console.log(columns);


    return(
        
        <div className="adminPageContainer"> 
        
             <DragDropContext  onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([_id, columns]) => {
                    return( <Droppable droppableId={_id} key={_id}>
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
                                    {columns.items.map((items, index) => {
                                        return(
                                            <Draggable  key={orders._id} draggableId={orders._id} index={index}>
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
                                                              <div>Order: {orders._id}</div>
                                                              <div>Name: {" "}{orders.name}</div>
                                                              <div>Phone Number:{" "}{orders.phoneNumber}</div>
                                                              <div>Peckup Point:{" "}{orders.peckupPoint}</div>
                                                              <div>Date: {" "}{orders.createdAt}</div>
                                                              <div>Total:{" "}{orders.total}</div>
                                                              <div>Cart Items:{orders.cartItems.map((x) => (
                                                                <div>
                                                                {x.count} {" x "} {x.name}
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )
                                                }}

                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                               </div>
                           )}}
                   </Droppable>)
                   
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
    fetchOrder
})
(AdminContent);

/*
<div>
                                {cartItems.map((x) => (
                                <div>
                                {x.count} {" x "} {x.name}
                                </div>
                                ))}
                            </div>
const itemsFromBackend = [
    {_id: "a", content: "try"},
];
const columnsFromBackend = {
    newOrder: {
      name: "Requested",
      items: itemsFromBackend,
    },
} 

  const onDragEnd = (result , columns, setColumns) => {
        if(!result.destination) return;
        const {source, destination} = result;
        const column = columns[source.droppableId];
        const copiedItems = [...column.items]
        console.log(columns)
        const removed = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
        
        console.log(result)
      }


{!orders ? ( 
         <div>loding </div>   
        ) : ( 
        <ul className="orderList">
            
            {orders.map((order, index) =>  (  

           <li className="orderStyle" key={index}>
            <div>Name:</div>
              <div>{order.name} </div>
      
              <div>Phone Number:</div>
             <div>{order.phoneNumber} </div>
      
             <div>Peckup Point:</div>
             <div>{order.peckupPoint} </div>
                
             <div>Date:</div>
            <div>{order.createdAt} </div>
       
       <div>Cart Items:</div>
      
       
           
       </li>
            )) }</ul>
       
   )}

<h1>admin</h1>
            <DragDropContext onDragEnd={result => console.log(result)}>
            {Object.entries(columns).map(([_id, column]) => {
                return(
                    <Droppable droppableId={_id} key={_id}>
                        {(provided , snapshot) => {
                            return(
                                <div {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                                    padding: 4,
                                    width: 250,
                                    minHeight: 500,
                                }}>
                                    
                                    {column.orders.map((newOrder, index) => {
                                        return(
                                            <Draggable key={newOrder._id} draggableId={newOrder._id} index={index}>
                                                {(provided, snapshot) => {
                                                    return(
                                                        <div 
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: 'none',
                                                            padding: '16px',
                                                            margin: '0 0 8px 0',
                                                            minHeigth: ' 50px',
                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                            color: 'white',
                                                            ...provided.draggableProps.style
                                                            }}
                                                        >
                                                            {newOrder.connect}
                                                        </div>
                                                    )
                                                }}

                                            </Draggable>
                                        )
                                    })}
                                </div>
                            )
                        }}
                    </Droppable>
                )
            })}
            </DragDropContext>
 <h1>admin</h1>
            <DragDropContext onDragEnd={result => console.log(result)}>
            {Object.entries(columns).map(([_id, column]) => {
                return(
                    <Droppable droppableId={_id} key={_id}>
                        {(provided , snapshot) => {
                            return(
                                <div {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                                    padding: 4,
                                    width: 250,
                                    minHeight: 500,
                                }}>
                                    
                                    {column.orders.map((newOrder, index) => {
                                        return(
                                            <Draggable key={newOrder._id} draggableId={newOrder._id} index={index}>
                                                {(provided, snapshot) => {
                                                    return(
                                                        <div 
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: 'none',
                                                            padding: '16px',
                                                            margin: '0 0 8px 0',
                                                            minHeigth: ' 50px',
                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                            color: 'white',
                                                            ...provided.draggableProps.style
                                                            }}
                                                        >
                                                            {newOrder.connect}
                                                        </div>
                                                    )
                                                }}

                                            </Draggable>
                                        )
                                    })}
                                </div>
                            )
                        }}
                    </Droppable>
                )
            })}
            </DragDropContext>



            function AdminContent(props)  {


   
    const [orders, setOrders] = useState([]);
    
 useEffect(() => {
     props.fetchOrder(setOrders)
 },[])
   

    return(
        <div className="adminPageContainer">
        {!orders ? ( 
         <div>loding </div>   
        ) : ( 
        <ul className="orderList">
            
            {orders.map((order, index) =>  (  

           <li className="orderStyle" key={index}>
            <div>Name:</div>
              <div>{order.name} </div>
      
              <div>Phone Number:</div>
             <div>{order.phoneNumber} </div>
      
             <div>Peckup Point:</div>
             <div>{order.peckupPoint} </div>
                
             <div>Date:</div>
            <div>{order.createdAt} </div>
       
       <div>Cart Items:</div>
      
       
           
       </li>
            )) }</ul>
       
   )}
        
       </div>
    );
}

export default connect(
    (state) => ({
         orders: state.order.orders,
    }), 
{
    fetchOrder
})
(AdminContent);


{column.orders.map((order, index) => {
                                        return(
                                            <Draggable key={order._id} draggableId={order._id} index={index}>
                                                {(provided, snapshot) => {
                                                    return(
                                                        <div 
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: 'none',
                                                            padding: '16px',
                                                            margin: '0 0 8px 0',
                                                            minHeigth: ' 50px',
                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                            color: 'white',
                                                            ...provided.draggableProps.style
                                                            }}
                                                        >
                                                            {order.connect}
                                                        </div>
                                                    )
                                                }}

                                            </Draggable>
                                        )
                                    })}
 */