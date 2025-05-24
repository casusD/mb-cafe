'use client';

import styles from './Marquee.module.scss';

interface Props {
	text: string;
	id?: string;
}

export default function Marquee({ text, id }: Props) {
	return (
		<div id={id} className={styles.marquee}>
			<div className={styles.marquee__inner}>
				{Array(20)
					.fill(0)
					.map((_, i) => (
						<span key={i}>
							{text}
							<span className='dot'>{'     '}•</span>
						</span>
					))}
			</div>
		</div>
	);
}
