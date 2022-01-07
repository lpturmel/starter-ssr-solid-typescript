import { Component } from "solid-js";
import Logo from "../components/Logo";

const Home: Component = () => {
	return (
		<main class="w-full h-full vstack space-y-4 items-center justify-center">
			<Logo />
			<div class="text-5xl hstack space-x-2">
				<p class="text-blue-500 font-semibold">Solid </p>
				<p>SSR Starter!</p>
			</div>
			<p>
				Visit{" "}
				<a
					href="https://solidjs.com"
					class="text-blue-500"
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
