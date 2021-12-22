<div>
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
		
		function returnRefreshedValue(inputValue) {
			if(inputValue === "") return defaultValue || "";
			return inputValue;
		};

		function handleValues(element) {
			value = returnRefreshedValue(element.target.value);
		}

</script>