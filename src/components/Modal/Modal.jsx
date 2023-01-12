import React from 'react';
import './modal.css';
import {BsPatchCheckFill} from 'react-icons/bs'


const Modal = ({ closeModal, project }) => {
   
  const {name,image,deployedLink,description} = project;

  return (
    <>
        <article className="container modal-overlay" onClick={closeModal}>

          <div className="modal-content">  

          <div className='modal-button__container'>         
            <button className="modal-close__button" onClick={closeModal}>✖</button>
          </div>        

          <div className="modal-title">
                <div className="modal-image">
                    <img src={image} alt={`${name} app Screenshot`} />
                </div>
          
                <h4>{name}</h4>
          </div>

          <p className="modal-description">
            {description}{" "}         
            Checkout the {" "}
            <a href={`https://github.com/FOR-TIMI/${name}`}>source code </a>
            and the  <a  
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
              >Live Demo</a>
 
          </p>
         


          <div className="modal-tools__container">       
              <h5 className='modal-tools__header'>Tools Used:</h5>
              <ul className="modal-tools">
                    <li className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon"/>
                      <small>Jwt</small>
                    </li>
                    <li className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon"/>
                      <small>MongoDB</small>
                    </li>
                    <li className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon"/>
                      <small>NodeJs</small>
                    </li>
                    <li className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon"/>
                      <small>ExpressJs</small>
                    </li>
                    <li className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon"/>
                      <small>React</small>
                    </li>
                    <li className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon"/>
                      <small>Mui</small>
                    </li>
                </ul>
          </div>

  


          </div>
        </article>
    </>
  );
};

export default Modal;
