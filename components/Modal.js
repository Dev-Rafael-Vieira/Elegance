import styles from '../styles/Modal.module.css';
import { useState } from 'react'; 

export default function Modal(){


	return (
<>

    <div id="abrirModal" className={styles.modal}>
        
        <div>
            <a href="#fechar" title="Fechar" className={styles.fechar}>x</a>
            <h2>Referência #0338357</h2>
            <p>LOREN IPSUM</p>
            <p>LOREN IPSUM</p>
        </div>
    </div>

</>
)
}