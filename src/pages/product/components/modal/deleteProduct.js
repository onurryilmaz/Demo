import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import {productDel} from '../../api/action'

function DeleteProduct({id, title}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
      dispatch(productDel(id))
      handleClose()
    };
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Sil
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>

          <Modal.Header closeButton>
            <Modal.Title>Ürün Sil</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              {title} isimli ürünü silmek istediğinize eeminmisiniz.
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Çıkış
            </Button>
        
            <Button variant="danger" onClick={handleSubmit}> Sil </Button>
          </Modal.Footer>
          

        </Modal>
      </div>
    );
  }
  
  export default DeleteProduct;