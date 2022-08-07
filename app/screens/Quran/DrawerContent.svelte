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
		selectedChapterIndex.set(id - 1);
		toggleDrawer();
	};
</script>

<listView items={chapters}>
	<Template let:item={chapter}>
		<flexboxLayout
			on:tap={() => {
				handleTap(chapter.id);
			}}
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
	}

	.drawerItem {
		font-size: 16px;
		margin: 0;
	}

	label {
		font-weight: 300;
	}
</style>
