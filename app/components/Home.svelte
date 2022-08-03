<script lang="ts">
	import quran from "../data/quran_en.json";
</script>

<page>
	<actionBar title="Initial Test" />
	<tabView>
		{#each quran as chapter}
			<tabViewItem title="{chapter.id}. {chapter.translation}">
				<scrollView>
					<label textWrap={true} text={JSON.stringify(chapter.verses, null, 2)} />
				</scrollView>
			</tabViewItem>
		{/each}
	</tabView>
</page>

<style>
</style>
