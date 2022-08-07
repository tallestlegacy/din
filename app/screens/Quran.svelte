<script lang="typescript">
	import SubHeading from "~/components/SubHeading.svelte";
	import Surah from "../components/Surah.svelte";
	import chapters from "../data/en/index.json";

	let selectedIndex = 0;
	$: currentChapter = chapters[selectedIndex];
</script>

<page>
	<actionBar>
		<flexboxLayout>
			<SubHeading text="{currentChapter.id}. {currentChapter.translation}" />
			<SubHeading text={currentChapter.name} />
		</flexboxLayout>
	</actionBar>
	<gridlayout class="page">
		<pager
			showIndicator={true}
			indicatorColor="#00ff00"
			animated={true}
			transition={{
				name: "slideLeft",
				duration: 200,
				curve: "ease",
			}}
			bind:selectedIndex
		>
			<!-- Surah Pager-->
			{#each chapters as chapter}
				<pageritem>
					<Surah {chapter} />
				</pageritem>
			{/each}
		</pager>
	</gridlayout>
</page>
