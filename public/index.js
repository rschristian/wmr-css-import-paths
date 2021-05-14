import { hydrate, prerender as ssr } from 'preact-iso';
import 'foo/index.css'

export function App() {
	return (
        <h1>Should be red if <code>foo</code> is imported properly</h1>
	);
}

hydrate(<App />);

export async function prerender() {
	return await ssr(<App />);
}
