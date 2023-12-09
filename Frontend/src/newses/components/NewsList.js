import React from "react";

import './NewsList.css';
import Card from "../../shared/components/UIElements/Card";
import NewsItem from "./NewsItem";

import { Item } from 'semantic-ui-react'


const NewsList = props => {
    if(props.items.length === 0){
        return (
          <div className="center">
            <Card>
              <h2>No New Notices.</h2>
            </Card>
          </div>
        );
    }

    return (
    <div className="cont">
  <Item.Group>
      {/* <ul className="users-lis" > */}
        {props.items.map((news) => (
          <NewsItem
            key={news.id}
            id={news.id}
            image={news.image}
            title={news.title}
            description={news.description}
          />
        ))}
      {/* </ul> */}
</Item.Group>
</div>
    );
};

export default NewsList;