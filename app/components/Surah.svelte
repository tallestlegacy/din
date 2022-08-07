<script lang="ts">
	import { Template } from "svelte-native/components";
	import SubHeading from "./SubHeading.svelte";
	import Heading from "./Heading.svelte";
	import Verse from "./Verse.svelte";
	export let chapter: {
		id: number;
		name: string;
		transliteration: string;
		translation: string;
		type: string;
		total_verses: number;
	};
</script>

<listView items={require(`../data/en/${chapter.id}.json`).verses}>
	<Template let:item={verse}>
		<Verse {verse} />
	</Template>
</listView>

<style>
	.container {
		padding: 24px;
		height: 100%;
	}
</style>
