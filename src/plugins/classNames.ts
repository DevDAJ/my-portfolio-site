export default function classNames(...args: any[]) {
	return args.filter(Boolean).join(' ').split(',').join(' ');
}
