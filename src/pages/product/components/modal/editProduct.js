import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Modal, Button, Form} from 'react-bootstrap'
import {productPut} from '../../api/action'

function EditProduct({item}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const [value, setValue] = useState({
      ...item
    })
  
    const handleClose = () =>{ 
      setShow(false)
    };
    const handleShow = () => {
      setShow(true)
    };
    const handleChange = (e) => {
        setValue({
          ...value,
          [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
      dispatch(productPut(value))
      handleClose()
    };
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Düzenle
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>

          <Modal.Header closeButton>
            <Modal.Title>Ürün Düzenle</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Ürün adı</Form.Label>
                <Form.Control 
                  type="text" 
                  name='title'
                  value={value.title || ""}
                  placeholder= 'Ürün Adını Yazınız'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Adet</Form.Label>
                <Form.Control 
                  type="number" 
                  name='quantity'
                  value={value.quantity || ""}
                  placeholder= '0'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Fiyat</Form.Label>
                <Form.Control 
                  type="number" 
                  name='salePrice'
                  value={value.salePrice || ""}
                  placeholder= '0'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Resim Url</Form.Label>
                <Form.Control 
                  type="text" 
                  name='images'
                  value={value.images || ""}
                  placeholder= 'Resim için bir url girin'
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Açıklama</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows="3"
                  name='description'
                  value={value.description || ""}
                  placeholder= 'Lütfen Açıklama Giriniz'
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Çıkış
            </Button>
        
            <Button variant="primary" onClick={handleSubmit}> Kaydet </Button>
          </Modal.Footer>
          

        </Modal>
      </div>
    );
  }
  
  export default EditProduct;