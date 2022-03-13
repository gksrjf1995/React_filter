import React from 'react'

const Table = ({data}) => {
  console.log(data);

  return (
    <div>
      <div style={{color : "white"}}>
        {data.map((item)=>{
          return <p key={item.id}>
            First : {item.first_name}<br/>
            Last : {item.last_name}<br/>
            Email : {item.email}
          </p>
        })}
      
      </div>
      
    </div>
  )
}

export default Table