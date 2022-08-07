<script lang="ts">
	import { Color } from "@nativescript/core";
	import colors from "~/constants/colors";

	export let text: string = "Add Title";
	export let color: Color = colors.black;
</script>

<label {text} {color} />

<style>
	label {
		font-size: 16px;
		font-weight: 200;
	}
</style>
