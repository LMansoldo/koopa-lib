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

	test('should hide erase button when component is empty', () => {
		render(TextField, { 
			props: { 
				value: ''
			} 
		});

		const closeButton = screen.queryByRole('button');
		expect(closeButton).not.toBeInTheDocument();
	});

	test('should return text with mask', () => {
		const {getByDisplayValue} = render(TextField, { 
			props: { 
				value: '14573355731',
				mask: '999.999.999-99',
			} 
		});

		expect(getByDisplayValue('145.733.557-31')).toBeInTheDocument();
	});
	
});