export default function RelatedPosts( { relatedPosts } ) {
	if ( relatedPosts?.length === 0 ) {
		return null;
	}

	return (
		<ul className="xwp-country-card__related-posts-list">
			{ relatedPosts.map( ( relatedPost ) => (
				<li
					key={ relatedPost.id }
					className="xwp-country-card__related-post"
				>
					<a
						className="xwp-country-card__related-post-link"
						href={ relatedPost.link }
						data-post-id={ relatedPost.id }
					>
						<h3 className="xwp-country-card__related-post-title">
							{ relatedPost.title }
						</h3>
						<p
							className="xwp-country-card__related-post-excerpt"
							dangerouslySetInnerHTML={ {
								__html: relatedPost.excerpt,
							} }
						/>
					</a>
				</li>
			) ) }
		</ul>
	);
}
