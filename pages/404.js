import Link from 'next/link';

export default function NotFound(){
	return(

		<div className="not-found">

			<h1>Ooops...</h1>
			<p>Parece que algo não saiu como esperado!</p>
			<div className="container404">
				<img id="imagem404" src="/images/404.gif" />
				<h2>Esta página não está disponível no momento...</h2>
				<p><Link href="/">Volte para a página inicial &#127919;</Link></p>
			</div>

		</div>

	)
}