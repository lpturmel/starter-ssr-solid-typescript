import Counter from "../components/Counter";
import { Component } from "solid-js";

const Home: Component = (props) => {
	return (
		<main>
			<h1>Hello world!</h1>
			<Counter />
			<p>
				Visit{" "}
				<a
					href="https://solidjs.com"
					class="text-red-500"
					target="_blank"
				>
					solidjs.com
				</a>{" "}
				to learn how to build Solid apps.
			</p>
		</main>
	);
};

export default Home;
