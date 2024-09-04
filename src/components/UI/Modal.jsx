import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open, className='' }) => {
    const dialog = useRef()

    useEffect(() => {
        const modal = dialog.current
        if(open){
            modal.showModal();
        }

        return () => modal.close();
    }, [open])

    return (
        createPortal(
            // open={open} here this is not used, we can open it programmetly b/c it overy other thing 
            // 1st mtd is using forwardRef() but here use useEffect()
            <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
            document.getElementById('modal')
        )
    )
}

export default Modal;