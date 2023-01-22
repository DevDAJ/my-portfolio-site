// Create an aniamting loading SVG
function LoadingSVG() {
	return (
		<div className='flex flex-col justify-center items-center'>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'
				className='lds-rolling'>
				<circle
					cx='50'
					cy='50'
					fill='none'
					stroke='#FFF'
					strokeWidth='10'
					r='35'
					strokeDasharray='164.93361431346415 56.97787143782138'
					transform='rotate(0 50 50)'>
					<animateTransform
						attributeName='transform'
						type='rotate'
						calcMode='linear'
						values='0 50 50;360 50 50'
						keyTimes='0;1'
						dur='1s'
						begin='0s'
						repeatCount='indefinite'></animateTransform>
				</circle>
			</svg>
		</div>
	);
}

export default LoadingSVG;
