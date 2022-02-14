import styles from '../styles/Card.module.css';
import Modal from '../components/Modal';
import { useState } from 'react';


export default function Card(props) {
  const [ofdata, setOfdata] = useState([]);


  
  return (

          <div className={styles.container}>
          {props.ofs.map((ofs) => (
            
            <div className={styles.cardcontainer} key={ofs.of}>

              <div className={
                ofs.prioridade_num == 4 ? styles.cardprioridadetotal 
                : ofs.prioridade_num == 3 ? styles.cardurgente 
                : styles.card
              }>
              <div className={styles.reteminfo}>
                <h2 className={styles.referencia}>Referência <span className={styles.ref}>#{ofs.referencia}</span></h2>
                <p className={styles.info}>
                  <p className={styles.infocontent}>
                    Impressora: 
                    <p className={styles.ref}>{ofs.impressora}</p>
                    Cor | Estampa: 
                    <p className={styles.ref}>{ofs.cor}</p>
                    Tamanhos: 
                    <p className={styles.ref}>{ofs.tamanhos}</p>
                    Quantidade: {ofs.qtd}
                  </p>
                </p>
              </div> 
                  <img id="imagem" src={ofs.img} className={styles.imagem}/>
                  
                
                <p><b>O.F. </b>#{ofs.of}</p>
                <p><b>{ofs.setor}</b></p>
                <div className={
                  ofs.prioridade_num == 1 ? styles.prioridade1 
                  : ofs.prioridade_num == 2 ? styles.prioridade2
                  : ofs.prioridade_num == 3 ? styles.prioridade3
                  : styles.prioridade4
                  }>
                  <span className={styles.descricao}>{
                    ofs.prioridade_num == 1 ? "Prioridade *Baixa*" 
                    : ofs.prioridade_num == 2 ? "Prioridade Normal"
                    : ofs.prioridade_num == 3 ? "Prioridade Urgente"
                    : "PRIORIDADE *TOTAL*"
                    }</span>
                </div>
                <p>{ofs.status}...</p>
                <Modal ofs={ofdata}/>
                
                <a href="#editar_of" onClick={() => setOfdata(ofs)} value={ofs.of} className={styles.acessar} >Acessar</a>
              </div>
            </div>
            ))}
          </div>
  )
}
