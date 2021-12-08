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