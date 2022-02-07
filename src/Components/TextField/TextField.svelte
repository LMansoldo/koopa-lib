<div class="textfield">
	<label for={id}>
		{textFieldName}
	</label>
	<input
		id={id}
		name={textFieldName}
		class="" 
		bind:value={value}
		on:input={(e) => handleValues(e)}
		defaultValue={defaultValue}
		placeholder={placeholder}
	/>
	{#if value}
		<button
			class=""
			on:click={() => cleanValue()}
			type="button"
		>
			x
		</button>
	{/if}
</div>

<script>
	import { onMount } from 'svelte';

	export let id = 0;
	export let textFieldName = '';
	export let value = "";
	export let defaultValue = '';
	export let placeholder = '';

	onMount(() => {
		if(defaultValue) {
			value = defaultValue;
		}
	});
	
	function cleanValue() {
		value = "";
	};

	function returnRefreshedValue(inputValue) {
		if(inputValue === "") return defaultValue || "";
		return inputValue;
	};

	function handleValues(element) {
		value = returnRefreshedValue(element.target.value);
	}

</script>

<style lang="scss">
.textfield {
	input {
		height: 32px;
		width: 100%;
		border-radius: 10px;
		background: #f1efef;
		border: 2px solid #808080;
	}

	button {
		border-radius: 30px;
		border: 1px solid transparent;
		color: #FFF;
		background: #993399;
	}
}
</style>