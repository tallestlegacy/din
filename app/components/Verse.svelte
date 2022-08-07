<script lang="ts">
	export let verse: {
		id: number;
		text: string; // arabic
		translation: string; // en
		transliteration: string; // arabic in latin
	};
</script>

<flexboxLayout columnSpan={1} class="verse" flexDirection="column">
	<label textWrap={true} text={verse.text} class="text" />
	<label textWrap={true} text={verse.transliteration} class="transliteration" />
	<label textWrap={true} text="{verse.id}. {verse.translation}" class="translation" />
</flexboxLayout>

<style>
	.translation {
		font-size: 12px;
	}

	.text {
		font-size: 24px;
		color: gray;
	}

	.transliteration {
		font-size: 12px;
		color: gray;
	}
</style>
