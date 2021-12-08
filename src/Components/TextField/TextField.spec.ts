import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom'
import TextField from './TextField.svelte';

describe('TextField', () => {
	test('should render with label & placeholder', () => {
		const {getByLabelText, getByPlaceholderText} = render(TextField, { 
			props: { 
				id: 'test id',
				textFieldName: 'textfield name',
				placeholder: 'type here',
			} });

		expect(getByLabelText('textfield name')).toBeInTheDocument();
		expect(getByPlaceholderText('type here')).toBeInTheDocument();
	});

	test('should render with default value', () => {
		const {getByDisplayValue} = render(TextField, { 
			props: { 
				defaultValue: 'default value'
			} });

		expect(getByDisplayValue('default value')).toBeInTheDocument();
	});

	test('should return typed value', () => {
		const {getByDisplayValue} = render(TextField, { 
			props: { 
				value: 'value'
			} });

		expect(getByDisplayValue('value')).toBeInTheDocument();
	});

	test('should return erase button when component receive value', () => {
		render(TextField, { 
			props: { 
				value: 'value'
			} 
		});

		const closeButton = screen.getByRole('button');
		expect(closeButton).toBeInTheDocument();
	});
	
});