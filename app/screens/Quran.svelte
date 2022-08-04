<script>
	import Surah from "~/components/Surah.svelte";
	import chapters from "../data/en/index.json";
</script>

<page actionBarHidden={true}>
	<tabView>
		{#each chapters as chapter}
			<tabViewItem title={chapter.id} recycleNativeView={true}>
				<Surah {chapter} />
			</tabViewItem>
		{/each}
	</tabView>
</page>
