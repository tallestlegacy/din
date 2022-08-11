<script lang="ts">
	import Surah from "~/components/Surah.svelte";
	import chapters from "~/data/en/index.json";
	import { Drawer } from "@nativescript-community/ui-drawer";
	import DrawerContent from "./DrawerContent.svelte";
	import ActionBarHeading from "~/components/ActionBarHeading.svelte";
	import colors from "~/constants/colors";

	import { selectedChapterIndex } from "~/store";
	import Spacer from "~/components/Spacer.svelte";

	$: currentChapter = chapters[$selectedChapterIndex];

	let drawer: Drawer;
	function toggleDrawer() {
		drawer.toggle();
	}
</script>

<page androidStatusBarBackground={colors.accentDark} actionBarHidden={true}>
	<actionBar on:tap={toggleDrawer} backgroundColor={colors.accentDark} color={colors.white}>
		<flexboxLayout justifyContent="space-between" class="actionBarContent">
			<label class="" />
			<flexboxLayout
				borderColor={colors.whiteTransluscent}
				borderRadius="50%"
				borderWidth="1px"
				padding="0px 40px"
			>
				<ActionBarHeading
					color={colors.white}
					text="{currentChapter.id}. {currentChapter.translation}"
				/>
				<ActionBarHeading color={colors.white} text=" {currentChapter.name}" />
			</flexboxLayout>
		</flexboxLayout>
	</actionBar>

	<drawer bind:this={drawer} class="drawer" gestureEnabled={false}>
		<!-- Drawer Content-->
		<gridLayout prop:leftDrawer width="300" rows="auto, *" backgroundColor={colors.white}>
			<DrawerContent {chapters} {toggleDrawer} />
		</gridLayout>

		<!-- Surah ViewPager -->
		<stackLayout prop:mainContent>
			<flexboxLayout
				justifyContent="center"
				alignItems="center"
				class="actionBarContent"
				backgroundColor={colors.accentDark}
				on:tap={toggleDrawer}
			>
				<flexboxLayout
					borderColor={colors.whiteTransluscent}
					borderRadius="50%"
					borderWidth="1px"
					padding="0px 40px"
					justifyContent="center"
					alignItems="center"
				>
					<ActionBarHeading
						color={colors.white}
						text="{currentChapter.id}. {currentChapter.translation}"
					/>
					<Spacer />
					<ActionBarHeading color={colors.white} text=" {currentChapter.name}" />
				</flexboxLayout>
			</flexboxLayout>
			<pager
				showIndicator={true}
				indicatorColor="#00ff00"
				animated={true}
				transition={{
					name: "slideLeft",
					duration: 200,
					curve: "ease",
				}}
				bind:selectedIndex={$selectedChapterIndex}
			>
				<!-- Surah Pager-->
				{#each chapters as chapter}
					<pageritem>
						<Surah {chapter} />
					</pageritem>
				{/each}
			</pager>
		</stackLayout>
	</drawer>
</page>

<style>
	.actionBarContent {
		width: 100%;
		border: 2px #fff;
		padding: 24px;
	}
</style>
