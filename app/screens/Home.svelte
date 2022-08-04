<script lang="ts">
	import { navigate, showModal } from "svelte-native";
	import About from "./About.svelte";
	import Quran from "./Quran.svelte";
</script>

<page>
	<actionBar title="Home" />
	<stackLayout>
		<button
			on:tap={() => {
				navigate({ page: Quran });
			}}
		>
			Quran
		</button>
		<button
			on:tap={() => {
				navigate({ page: About });
			}}
		>
			About
		</button>
	</stackLayout>
</page>
