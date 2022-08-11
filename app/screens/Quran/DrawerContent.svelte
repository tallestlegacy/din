<script lang="ts">
	import { Template } from "svelte-native/components";
	import colors from "~/constants/colors";
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
		selectedChapterIndex.set(id);
		toggleDrawer();
	};
</script>

<listView
	items={chapters}
	on:itemTap={(event) => {
		handleTap(event.index);
	}}
>
	<Template let:item={chapter}>
		<flexboxLayout
			class="drawerItem"
			color={chapter.id == $selectedChapterIndex + 1 ? colors.accentDark : colors.black}
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
		padding: 0;
	}

	.drawerItem {
		font-size: 16px;
		margin: 0;
	}

	label {
		font-weight: 300;
	}
</style>
