/**
 * Internal dependencies
 */
import countries from '../assets/countries.json';

export function getEmojiFlag( countryCode ) {
	return String.fromCodePoint(
		...countryCode
			.toUpperCase()
			.split( '' )
			.map( ( char ) => 127397 + char.charCodeAt() )
	);
}

export const countryOptions = Object.entries( countries ).map(
	( [ code, country ] ) => ( {
		value: code,
		label: `${ getEmojiFlag( code ) }  ${ country } — ${ code }`,
	} )
);

export const stripTags = ( str ) => str.replace( /(<([^>]+)>)/gi, '' );
