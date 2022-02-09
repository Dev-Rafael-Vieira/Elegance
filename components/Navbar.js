import styles from '../styles/Navbar.module.css';

export default function Navbar(){
	return(

		<div className={styles.container}>
			<div className={styles.logocontainer}>
				<img alt="Eleganceallcurves" src="/images/logo.png" className={styles.logo}/>
			</div>
		</div>
	)

}