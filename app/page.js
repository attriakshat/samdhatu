import styles from './page.module.scss';

export default function Home() {
	return (
		<div className={styles.svgContainer}>
			<svg
				width='200'
				height='200'
			>
				<circle
					cx='100'
					cy='120'
					r='70'
					fill='#a4b465'
				/>
				<rect
					x='82'
					y='35'
					width='35'
					height='20'
					fill='#ffcf50'
				/>
				<circle
					cx='100'
					cy='25'
					r='12'
					fill='none'
					stroke='#F79257'
					stroke-width='2'
				/>
			</svg>

			<svg
				width='200'
				height='400'
				viewbox='-100 -200 200 400'
			>
				<polygon
					points='0,0 80,120 -80,120'
					fill='#234236'
				/>
				<polygon
					points='0,-40 60,60 -60,60'
					fill='#0C5C4C'
				/>
				<polygon
					points='0,-80 40,0 -40,0'
					fill='#38755B'
				/>
				<rect
					width='40'
					height='30'
					fill='brown'
					x='-20'
					y='120'
				/>
			</svg>
			<svg
				width='200'
				height='200'
				viewbox='-100 -100 200 200'
			>
				<circle
					className={styles.head}
					cx='0'
					cy='-50'
					r='30'
				/>
				<circle
					class={styles.eye}
					cx='-12'
					cy='-55'
					r='3'
				/>
				<circle
					class={styles.eye}
					cx='12'
					cy='-55'
					r='3'
				/>
				<rect
					className={styles.mouth}
					x='-10'
					y='-40'
					width='20'
					height='5'
					rx='2'
				/>
				<line
					className={styles.limb}
					x1='-40'
					y1='-10'
					x2='40'
					y2='-10'
				/>
				<line
					className={styles.limb}
					x1='-25'
					y1='50'
					x2='0'
					y2='-15'
				/>
				<line
					className={styles.limb}
					x1='25'
					y1='50'
					x2='0'
					y2='-15'
				/>
				<circle
					cx='0'
					cy='-10'
					r='5'
				/>
				<circle
					cx='0'
					cy='10'
					r='5'
				/>
			</svg>
			<svg
				width='200'
				height='200'
				viewbox='-100 -100 200 200'
			>
				<path
					className={styles.hamburgerRow}
					d=' M -50, -25 
						L -50, -50
						L -25, -50
						M 25, -50
						L 50, -50
						L 50, -25
						M 50, 25
						L 50, 50
						L 25, 50
						M -25, 50
						L -50, 50
						L -50, 25'
				/>
			</svg>
			<svg
				width='450'
				height='450'
			></svg>
		</div>
	);
}
