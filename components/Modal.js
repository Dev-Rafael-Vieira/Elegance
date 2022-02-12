import styles from '../styles/Modal.module.css';

export default function Modal(props){


	return (
        <>

            <div id="editar_of" className={styles.modal}>
                
                <div className={styles.content}>
                    <div className={styles.cardcontent}>
                        <a href="#fechar" title="Fechar" className={styles.fechar}>x</a>

                        <div className={styles.imagem}>
                            <img alt={props.ofs.referencia} src={props.ofs.img} className={styles.imagem}/>
                        </div>
                        <div className={styles.textmain}>
                            <h2>O.F. #{props.ofs.of}</h2>
                            <p><span className={styles.bold}>Referencia: </span> #{props.ofs.referencia}</p>
                            <p><span className={styles.bold}>Descrição: </span>{props.ofs.descricao}</p>
                            <p><span className={styles.bold}>Setor: </span>{props.ofs.setor}</p>
                            <p><span className={styles.bold}>Status: </span>{props.ofs.status}</p>
                            <p><span className={styles.bold}>Cor: </span>{props.ofs.cor}</p>
                        </div>
                    </div>  
                
                </div>
            </div>

        </>
    )
}