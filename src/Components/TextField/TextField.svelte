<div>
    <label for={id}>
			{textFieldName}
    </label>
		<input
			id={id}
			name={textFieldName}
			class="" 
			type={type}
			value={handleValues()}
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
    export let id = 0;
    export let textFieldName = '';
    export let type = 'text';
    export let value = null;
    export let defaultValue = '';
    export let placeholder = '';

		const handleValues = () => {
			if(defaultValue) return defaultValue;
			return value;
		}


</script>