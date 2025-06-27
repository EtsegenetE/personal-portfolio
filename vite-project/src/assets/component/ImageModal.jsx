import React from "react";

export default function ImageModal({isOpen, OnClose, imgSrc})  {
   if(!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={OnClose}>
            <div className="modal-content">
                <img src={imgSrc} alt="fullscreen" />
            </div>
        </div>
    )
}