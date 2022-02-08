<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import TextField from "../Components/TextField/TextField.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Example/TextField"
  component={TextField}
	argTypes={{
		id: "id-0",
		textFieldName: "Input name",
		placeholder: "Type me"
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <TextField 
		{...args}
	/>
</Template>
<!--  -->

<Story
  name="Default"
/>