import React from "react";
import { Link } from 'react-router-dom';

import {  Item } from 'semantic-ui-react'

// import Avatar from "../../shared/components/UIElements/Avatar";
// import Card from "../../shared/components/UIElements/Card";
import './NewsItem.css';
// import Button from "../../shared/components/FormElements/Button";

// const NewsItem = props => {
//     return (
//       <li className="user-item">
//         <Card className="user-item__content">
//         <Link to={`/newses/${props.id}`}>
//           <div className="user-item__image">
//             <Avatar image={`http://localhost:5000/${props.image}`} alt={props.title} />
//           </div>

//           <div className="user-item__info">
//             <h2>{props.title}</h2>   
//           </div>
//           </Link>
//         </Card>
//       </li>
//     );
// };

// export default NewsItem;


// import React from 'react'
// import { Image, Item } from 'semantic-ui-react'

const NewsItem = props => {
  return (
  // <li >
 
    <Item style={{  padding: 4 ,background: '#CCCCFF' }}>
      <Item.Image size='medium' src={`http://localhost:5000/${props.image}`} />
      <div >
      <Item.Content style={{ fontSize:15, marginLeft: 20 }}>
        <Item.Header ><h2>{props.title}</h2></Item.Header>
        {/* <Item.Meta>Description</Item.Meta> */}
        <br/>

        <Item.Description>
          {props.description.substring(0,200)}
        </Item.Description> 
      <Link to={`/newses/${props.id}`}>

<button style={{cursor: 'pointer'}} className="miki">Show Details</button> 
</Link>

      </Item.Content>
      </div>

    </Item>
  // </li>

  );
};

export default NewsItem;


