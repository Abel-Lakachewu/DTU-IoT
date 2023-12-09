import React,{ useState} from "react";
import { useHistory} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Modal from '../../shared/components/UIElements/Modal';
import BBButton from '../../shared/components/FormElements/Button';

import axios from 'axios';
import './internAccItem.css'

function InternAccItem({intern, onDeletePlace}) {
  const history = useHistory();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

    const handleDelete = async () => {
    setShowConfirmModal(false);
        try{
        await axios.delete('http://localhost:5000/api/internacc/'+intern._id);
        console.log("deleted");
  onDeletePlace(intern._id);
        
        }catch(err) {
          console.log(err);  
        }
   history.push('/internacc');

    }

    return(
        <React.Fragment>

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
            <BBButton danger onClick={handleDelete}>
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

        <div className="back">
        <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={14} className="pic ">
      <div className="" style={{"fontSize":"25px"}}>
            <p>{intern.title} &emsp; &emsp; GPA={intern.gpa} &emsp; &emsp; {intern.email}</p>
        </div>
      </Grid.Column>
      <Grid.Column width={2} className="pic">

  <br/>
            <button className="" style={{ "cursor":"pointer", "marginLeft": "-80px", "backgroundColor":"#66B2FF"}} onClick={showDeleteWarningHandler}><i class="fa-sharp fa-solid fa-trash fa-xl">delete</i></button>
            
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
       
        </React.Fragment>
    )
}

export default InternAccItem;