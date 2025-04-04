import Link from 'next/link';
import styles from '../page.module.scss';
import BlogHeader from '@/components/blogHeader/blogHeader';

export default function Home() {
	return (
		<div>
			<BlogHeader />
			<article className={styles.articleContainer}>
				<h1>The Ayurvedic Philosophy</h1>
				<h2>The Human body</h2>
				<p>
					Ayurveda suggests that the human body is an amalgamation of the root
					elemnts that make up our universe, It suggests that we are not just
					material beings but also energies. It is believed that the state of
					balance or imbalance of these root elements directly affects the state
					of your health. The state of balance which is believed to be life
					giving is knows as <Link href={'/'}>Samdhatu</Link>
				</p>
				<h2>What are the root elements?</h2>
				<p>
					The root elements are Akash(space), Vayu (air), Agni(Fire/Heat),
					Jal(water/liquid) and prathvi(solid matter/ earth). It is believed
					that the elements of space and earth are in a stable state in our
					body. Only the elements Air, Fire and Water are in motion, in other
					words can change. When these elements are disbalanced they are called
					Doshas, and this imbalance destorys the inner working of our bodies
					causing diseases and the diseases are merly symptoms of the existing
					disbalance.
				</p>
			</article>
		</div>
	);
}
