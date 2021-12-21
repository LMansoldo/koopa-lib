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
		export let mask = null;
		export let maskedValue = '';
		
		const testIfStringHasSpecialChar = string => {
			return /[!@#$%^&*(),.?":{}|<>\-]/.test(string);
		}

		const incrementMaskedValue = (scopedValue, scopedMask = []) => {
			let maskedValue = [];
			let specialCharCounter = 0;

			const selectBetweenSpecialCharAndString = (maskItem, scopedItem, index) => {
				if(testIfStringHasSpecialChar(maskItem)){
					specialCharCounter++
					return maskItem;
				} else {
					return scopedItem[index-specialCharCounter]
				}
			};

			scopedMask.filter((item, index) => {
				maskedValue = [
					...maskedValue,
					selectBetweenSpecialCharAndString(item, scopedValue, index),
				]
			});
			
			return maskedValue.toString().replaceAll(",", "");
			
		}

		const formatReceivedValue = () => {
			const fragmentedValue = [...value];
			const fragmentedMask = [...mask];
			return incrementMaskedValue(fragmentedValue, fragmentedMask); 
		}

		const checkIfHasMask = () => {
			if(mask) return maskedValue = formatReceivedValue();
			return value;
		}

		const handleValues = () => {
			if(defaultValue) return defaultValue;
			return checkIfHasMask();
		}

</script>