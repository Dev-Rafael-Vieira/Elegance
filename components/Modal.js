import styles from '../styles/Modal.module.css';

export default function Modal(props){


	return (
        <>

            <div id="editar_of" className={styles.modal}>
                
                <div className={styles.content}>
                    <div className={styles.cardcontent}>
                        <a href="#fechar" title="Fechar" className={styles.fechar}>&#x2716;</a>

                        <div className={styles.imagem}>
                            <img alt={props.ofs.referencia} src={props.ofs.img} className={styles.imagem}/>
                            <p><span ><b>Referencia: </b></span> #{props.ofs.referencia}</p>
                            <p><span ><b>Variante: </b></span> #{props.ofs.variante}</p>
                            <p><span ><b>Setor: </b></span>{props.ofs.setor}</p>
                            <p><span ><b>Status: </b></span>{props.ofs.status}</p>
                            <p><span ><b>Cor: </b></span>{props.ofs.cor}</p>
                            <p><span ><b>QTD: </b></span>{props.ofs.qtd}</p>
                        </div>
                        <div className={styles.textmain}>
                            <h2>O.F. #{props.ofs.of}</h2>
                            <p><span className={styles.bold}>Coleção: </span>{props.ofs.colecao}</p>
                            <p><span className={styles.bold}>Fluxo: </span>{props.ofs.fluxo}</p>
                            <p><span className={styles.bold}>Entrada: </span>{props.ofs.data_entrada}</p>
                            <p><span className={styles.bold}>Saída: </span>{props.ofs.data_saida}</p>
                            <p className={styles.bold}><span >Observação: </span>*{props.ofs.obs}</p>
                            <p><span className={styles.bold}>Descrição: </span>{props.ofs.descricao}</p>
                            
                        </div>
                        <div className={styles.textright}>
                            <h3 className={styles.bold}>Tamanhos: </h3> <p className={styles.tamanhos}>{props.ofs.tamanhos}</p>
                            <h3 className={styles.bold}>Consumo tinta: </h3> <p className={styles.tamanhos}>{props.ofs.consumo_tinta}</p>
                            <h3 className={styles.bold}>Custo por Impressão: </h3> <p className={styles.tamanhos}>{props.ofs.custo_impressao}</p>
                            <h3 className={styles.bold}>Custo Sublimação: </h3> <p className={styles.tamanhos}>{props.ofs.custo_sublimacao}</p>
                            <h3 className={styles.bold}>Custo Total da O.F. </h3> <p className={styles.tamanhos}>{props.ofs.custo_total}</p>
                        </div>
                    </div>  
                
                </div>
            </div>

        </>
    )
}