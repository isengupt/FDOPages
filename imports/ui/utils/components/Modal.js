import React from 'react';
import ReactDOM from 'react-dom';

const Modal2 = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay-webflow"/>
    <div className="modal-wrapper-webflow" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal-webflow">
        <div className="modal-header-webflow">
          <button type="button" className="modal-close-button-webflow" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

   {children}
     
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal2;