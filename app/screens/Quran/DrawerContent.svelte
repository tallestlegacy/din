<script lang="ts">
	import { Template } from "svelte-native/components";
	import { selectedChapterIndex } from "~/store";

	export let chapters: {
		id: number;
		name: string;
		transliteration: string;
		translation: string;
		type: string;
		total_verses: number;
	}[];
	export let toggleDrawer: () => any;

	const handleTap = (id: number): any => {
		toggleDrawer();
		selectedChapterIndex.set(id - 1);
	};
</script>

<listView items={chapters}>
	<Template let:item={chapter}>
		<flexboxLayout
			on:tap={() => {
				handleTap(chapter.id);
			}}
			class="drawerItem"
			justifyContent="space-between"
		>
			<label text="{chapter.id}. {chapter.translation}" />
			<label text={chapter.name} />
		</flexboxLayout>
	</Template>
</listView>

<style>
	listView {
		height: 100%;
	}

	.drawerItem {
		font-size: 16px;
	}

	label {
		width: fit-content;
	}
</style>
