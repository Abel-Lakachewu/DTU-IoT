import React,{ useState} from "react";
import { useHistory, Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Modal from '../../shared/components/UIElements/Modal';
import BBButton from '../../shared/components/FormElements/Button';


import axios from 'axios';
import './internItem.css'

function InternItem({intern, onDeletePlace}) {
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
        await axios.delete('http://localhost:5000/api/intern/'+intern._id);
        console.log("deleted");
  //  history.push('/internReq');
  onDeletePlace(intern._id);
        
        }catch(err) {
          console.log(err);  
        }
   history.push('/internReq');

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
    <Grid.Row columns={3}>
      <Grid.Column width={4} className="pic ">
      <div className="b c" style={{"fontSize":"15px"}}>
            <p><strong>Name:</strong><br/> {intern.title}</p>
            <p><strong>University:</strong><br/>  {intern.team}</p>
            <p><strong>Department:</strong><br/>  {intern.address}</p>
            <p><strong>GPA:</strong><br/>  {intern.gpa}</p>
            <p><strong>Email:</strong> <br/> {intern.email}</p>
        </div>
      </Grid.Column>
      <Grid.Column width={10} className="pic">
          <img src={`http://localhost:5000/${intern.image}`} alt={intern.title} />
      </Grid.Column>
      <Grid.Column width={2} className="pic">

<Link to={`/email/${intern._id}`}>
      <button className="b" style={{ "cursor":"pointer", "marginLeft": "-80px", "backgroundColor":"#66B2FF", "border": "black 2px solid", "padding":"10px"}} ><i class="fa-sharp fa-solid fa-envelope fa-2xl">email</i></button>
  </Link>

  <br/>
  <Link to={`/internaccform/${intern._id}`}><button className="b" style={{ "cursor":"pointer", "marginLeft": "-80px", "backgroundColor":"#66B2FF", "border": "black 2px solid", "padding":"10px"}} ><i class="fa-regular fa-solid fa-square-plus fa-2xl">
  Add</i></button>
  </Link>
  <br/>
            <button className="b" style={{ "cursor":"pointer", "marginLeft": "-80px", "backgroundColor":"#66B2FF", "border": "black 2px solid", "padding":"10px"}} onClick={showDeleteWarningHandler}><i class="fa-sharp fa-solid fa-trash fa-2xl">delete</i></button>
            
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
       
        </React.Fragment>
    )
}

export default InternItem;