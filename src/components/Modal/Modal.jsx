import { useEffect} from 'react';
import { motion } from 'framer-motion';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, direction = 'center' }) => {
    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
        onClose();
        }
    };

    if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Define animation variants based on direction
    const variants = {
    left: { x: '-100vw', opacity: 0 },
    right: { x: '100vw', opacity: 0 },
    center: { scale: 0.8, opacity: 0 },
    visible: { x: 0, scale: 1, opacity: 1 },
    exit: { x: direction === 'left' ? '-100vw' : '100vw', opacity: 0 },
    };

    const modalClassName = direction==='right'? "modal-content-right":"modal-content-left";
    const modalContainerClassName = direction==='right'? "modal-overlay-right" :"modal-overlay-left"

    return (
    <div className={modalContainerClassName} onClick={onClose}>
        <motion.div
        className={modalClassName}
        onClick={(e) => e.stopPropagation()} 
        initial={variants[direction]}
        animate={variants.visible}
        exit={variants.exit}
        transition={{ duration: 0.5 }}
        >
        {children}
        </motion.div>
    </div>
    );
};

export default Modal;
