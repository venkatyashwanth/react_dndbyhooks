import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import Picture from './Picture';
const PictureList = [
    {
        id: 1,
        url: 'https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg'
    },
    {
        id: 2,
        url: 'https://media.istockphoto.com/photos/desktop-pc-picture-id482895394'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsbCUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    }
]

function Dragdrop() {
    const [board,setBoard] = useState([]);
    const [{isOver},drop] = useDrop(()=>({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture)=> id === picture.id);
        setBoard((board)=> [...board, pictureList[0]])
    }

  return (
    <>
        <div className='Pictures'>
            {PictureList.map((picture) => {
                return <Picture url={picture.url} id={picture.id}/>
            })}
        </div>
        <div className='Board' ref={drop}>
            {board.map((picture)=>{
                return <Picture url={picture.url} id={picture.id}/>
            })}
        </div>
    </>
  )
}

export default Dragdrop