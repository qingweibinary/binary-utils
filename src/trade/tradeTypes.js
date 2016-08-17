export default [
	{ value: 'CALL', text: 'Rise', img: 'img/trade-call.svg', ticks: true, barrier: false },
	{ value: 'PUT', text: 'Fall', img: 'img/trade-put.svg', ticks: true, barrier: false },
	{ value: 'HIGHER', text: 'Higher', img: 'img/trade-higher.svg', ticks: false, barrier: false },
	{ value: 'LOWER', text: 'Lower', img: 'img/trade-lower.svg', ticks: false, barrier: false },
	{ value: 'DIGITMATCH', text: 'Digit Match', img: 'img/trade-digitmatch.svg', ticks: true, barrier: true },
	{ value: 'DIGITDIFF', text: 'Digit Differs', img: 'img/trade-digitdiff.svg', tick: true, barrier: true },
	{ value: 'DIGITOVER', text: 'Digit Over', img: 'img/trade-digitover.svg', tick: true, barrier: true },
	{ value: 'DIGITUNDER', text: 'Digit Under', img: 'img/trade-digitunder.svg', tick: true, barrier: true },
	{ value: 'DIGITEVEN', text: 'Digit Even', img: 'img/trade-digiteven.svg', tick: true, barrier: false },
	{ value: 'DIGITODD', text: 'Digit Odd', img: 'img/trade-digitodd.svg', tick: true, barrier: false },
	{ value: 'ASIANU', text: 'Asian Up', img: 'img/trade-asianu.svg', ticks: true, barrier: false },
	{ value: 'ASIAND', text: 'Asian Down', img: 'img/trade-asiand.svg', ticks: true, barrier: false },
	{ value: 'EXPIRYRANGE', text: 'Ends Between', img: 'img/trade-expiryrange.svg', ticks: false, barrier: false },
    { value: 'EXPIRYMISS', text: 'Ends Outside', img: 'img/trade-expirymiss.svg', ticks: false, barrier: false },
    { value: 'RANGE', text: 'Stays Between', img: 'img/trade-range.svg', ticks: false, barrier: false },
    { value: 'UPORDOWN', text: 'Goes Outside', img: 'img/trade-upordown.svg', ticks: false, barrier: false },
    { value: 'ONETOUCH', text: 'Touches', img: 'img/trade-onetouch.svg', ticks: false, barrier: false },
    { value: 'NOTOUCH', text: 'Does Not Touch', img: 'img/trade-notouch.svg', ticks: false, barrier: false },
    { value: 'SPREADU', text: 'Spread Long', img: 'img/trade-spreadu.svg', ticks: false, barrier: false },
    { value: 'SPREADD', text: 'Spread Short', img: 'img/trade-spreadu.svg', ticks: false, barrier: false },
];
