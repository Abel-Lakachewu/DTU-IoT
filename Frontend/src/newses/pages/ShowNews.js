import React, { useState, useContext, useEffect } from "react"; //
import { useParams, useHistory } from 'react-router-dom' //

import Card from "../../shared/components/UIElements/Card";
import './ShowNews.css'
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const ShowNews = () => { //

 
  const auth = useContext(AuthContext);
  const newsId = useParams().id; //
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const history = useHistory();


  // const Newses = {
  //   id: "n1",
  //   title: "Cloud seminar",
  //   image: "../../../public/images/Computer Engineering 1 .jpg",
  //   description:
  //     "Cloud computing is one of the emerging technologies that could take over the industry in the coming years.",
  // };

  // note the data that pass here has to be object, not array

  // I will checck if the id of the logged in user === id of the admin to display Edit and Delete buttons
  // eg. after importing the user, if(user.id === _ObjectId('123432418794efjh43))



  


  
  const [loadedNews, setLoadedNews] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/newses/${newsId}`
        );
        setLoadedNews(responseData.news);
      } catch (err) {}
    };
    fetchNews();
  }, [sendRequest, newsId]);


  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  } 

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  }

  const newsDeletedHandler = deletedNewsId => {
    setLoadedNews(prevNews =>
      prevNews.filter(news => news.id !== deletedNewsId)
    );
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false)
    try {
      await sendRequest(
        `http://localhost:5000/api/newses/${newsId}`, 
        'DELETE'
        );
      history.push('/newses');

        newsDeletedHandler(newsId);
        
        
    } catch (err) {}
    
  }


  return (
    <React.Fragment>
    <Modal show={showConfirmModal} onCancel={cancelDeleteHandler}  header="Are you sure?" footerClass="place-item__modal-actions" footer={
      <React.Fragment>
        <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
        <Button danger onClick={confirmDeleteHandler}>Delete</Button>
      </React.Fragment>
    }> 
    <p>Are you sure you want to delete this News?</p>
    </Modal>

<div style={{'minHeight': '100vh'}}>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedNews && 

    <div className="place-list" >
      <div className="place-item">  
      {isLoading && <LoadingSpinner asOverlay />}
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={`http://localhost:5000/${loadedNews.image}`} alt={loadedNews.title} />
          </div>
          <div className="place-item__info">
            <h2>{loadedNews.title}</h2>
            <p style={{whiteSpace: "pre-line"}}>{loadedNews.description}</p>
          </div>
          <div className="place-item__actions">
            {/* <Button>VIEW ON MAP</Button> */}
            {(auth.userId === '63bd8ebff0670624483b3e2a') && <Button to={`/newses/${newsId}/edit`}>EDIT</Button>}
            {(auth.userId === '63bd8ebff0670624483b3e2a') && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
            
          </div>
        </Card>
      </div>
    </div>
    

      } 
      </div>
    </React.Fragment>
  );
}

export default ShowNews;