/**
 * WordPress dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import countries from '../assets/countries.json';
import continentNames from '../assets/continent-names.json';
import continents from '../assets/continents.json';
import { getEmojiFlag } from './utils';
import RelatedPosts from './related-posts';

export default function Preview( { countryCode, relatedPosts } ) {
	if ( ! countryCode ) {
		return null;
	}

	const emojiFlag = getEmojiFlag( countryCode );

	const hasRelatedPosts = relatedPosts?.length > 0;

	return (
		<div className="xwp-country-card">
			<div
				className="xwp-country-card__media"
				data-emoji-flag={ emojiFlag }
			>
				<div className="xwp-country-card__flag">{ emojiFlag }</div>
			</div>
			<h3 className="xwp-country-card__heading">
				{ __( 'Hello from', 'xwp-country-card' ) }{ ' ' }
				<strong>{ countries[ countryCode ] }</strong> (
				<span className="xwp-country-card__country-code">
					{ countryCode }
				</span>
				), { continentNames[ continents[ countryCode ] ] }!
			</h3>
			<div className="xwp-country-card__related-posts">
				<h3 className="xwp-country-card__related-posts-heading">
					{ hasRelatedPosts
						? sprintf(
								/* translators: %d - number of related posts. */
								_n(
									'There is %d related post:',
									'There are %d related posts:',
									relatedPosts.length,
									'xwp-country-card'
								),
								relatedPosts.length
						  )
						: __(
								'There are no related posts.',
								'xwp-country-card'
						  ) }
				</h3>

				<RelatedPosts relatedPosts={ relatedPosts } />
			</div>
		</div>
	);
}
