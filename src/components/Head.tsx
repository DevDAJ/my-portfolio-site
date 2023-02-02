import { Partytown } from '@builder.io/partytown/react';

export function Head() {
	return (
		<>
			<Partytown debug={true} forward={['dataLayer.push']} />
		</>
	);
}
