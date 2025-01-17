import Image from 'next/image';

import ArrowIcon from '../../../../public/images/icons/ArrowIcon';
import IPortfolioCard from './interface';
import styles from './styles.module.scss';

export default function PortfolioCard({
	tag,
	title,
	image,
	link,
	adaptive,
}: IPortfolioCard) {
	return (
		<>
			<div className={styles['card__image']}>
				<div className={styles['card__container']}>
					{adaptive ? (
						<picture>
							<source
								srcSet="/images/portfolio/image-41-390px.webp"
								media="(max-width: 390px)"
							/>
							<source
								srcSet="/images/portfolio/image-41-834px.webp"
								media="(max-width: 835px)"
							/>
							<source
								srcSet="/images/portfolio/image-41-1280px.webp"
								media="(max-width: 1281px)"
							/>
							<Image
								src={image}
								alt="portfolioIcon"
								className={styles['card__bg']}
							/>
						</picture>
					) : (
						<Image
							src={image}
							alt="portfolioIcon"
							className={styles['card__bg']}
						/>
					)}
					<span className={styles['card__tag']}>{tag}</span>
					<a
						className={styles['card__link']}
						href={link}
						target="blank"
						rel="noreferrer"
						aria-label="Visit site"
					>
						<ArrowIcon />
					</a>
				</div>
			</div>
			<a
				className={styles['card__title']}
				href={link}
				target="blank"
				rel="noreferrer"
			>
				{title}
			</a>
		</>
	);
}
