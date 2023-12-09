import React, { useState, useContext } from 'react';

// import Card from '../../shared/components/UIElements/Card';
import BBButton from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './PlaceItem.css';


import { Grid,Image } from "semantic-ui-react";
// import { Button, Comment, Form } from "semantic-ui-react";


const PlaceItem = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);


  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${props.id}`,
        'DELETE'
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<BBButton onClick={closeMapHandler}>CLOSE</BBButton>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <BBButton inverse onClick={cancelDeleteHandler}>
              CANCEL
            </BBButton>
            <BBButton danger onClick={confirmDeleteHandler}>
              DELETE
            </BBButton>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">

        <Grid celled>
          {isLoading && <LoadingSpinner asOverlay />}
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={`http://localhost:5000/${props.image}`} />
            </Grid.Column>

            <Grid.Column width={10}>
              <Grid.Row>
                <h2>{props.title}</h2>
                <br />
                <p style={{whiteSpace: "pre-line"}}>{props.description}</p>
                {/* <br />
                <p>{props.address}</p> */}
              </Grid.Row>
              <br />
              <br />
              <Grid columns={3} divided>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>Hardware Requirement</h3>
                    <p style={{whiteSpace: "pre-line"}}>{props.address}</p>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <h3>Project Status</h3>
                    <p>{props.status}%</p>
                    <progress id="file" max="100" value={props.status}> {props.status}% </progress>
                
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <h3>Helps from</h3>
                    <p style={{whiteSpace: "pre-line"}}>{props.team}</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>





{/* <Comment.Group style={{width:'700px', marginLeft:"20%", marginTop:'20px', border:"solid 0.5px #C6BFBF"}}>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Text>
          <p>
            The hours, minutes and seconds stand as visible reminders that your
            effort put them all there.
          </p>
        </Comment.Text>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Text>
        <p>
        I re-tweeted this.
        </p>
        </Comment.Text> 
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
 */}







            <div className="place-item__actions">
              {auth.userId === props.creatorId && (
                <BBButton to={`/places/${props.id}`}>EDIT</BBButton>
              )}

              {(auth.userId === props.creatorId ||
                auth.userId === "63bd8ebff0670624483b3e2a") && (
                <BBButton danger onClick={showDeleteWarningHandler}>
                  DELETE
                </BBButton>
              )}
            </div>
          </Grid.Row>
        </Grid>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
