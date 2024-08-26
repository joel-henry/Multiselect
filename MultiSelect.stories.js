import MultiSelect from '@components/MultiSelect';

export default {
  title: 'Example/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    variant: 'default',
    defaultValue: [],
    placeholder: 'Select options',
    animation: 0,
    maxCount: 3,
    modalPopover: false,
    asChild: false,
    className: '',
  },
};

export const Default = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    variant: 'default',
    defaultValue: [],
    placeholder: 'Select options',
    animation: 0,
    maxCount: 3,
    modalPopover: false,
    asChild: false,
    className: '',
  },
};

export const WithDefaultSelection = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    variant: 'default',
    defaultValue: ['option1', 'option2'],
    placeholder: 'Select options',
    animation: 0,
    maxCount: 3,
    modalPopover: false,
    asChild: false,
    className: '',
  },
};

export const SearchDisabled = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    defaultValue: [],
    placeholder: 'Select options',
    animation: 0,
    maxCount: 3,
    modalPopover: false,
    asChild: false,
    enableSearch: false,
    className: '',
  },
};

export const SecondaryVariant = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    variant: 'secondary',
    defaultValue: [],
    placeholder: 'Select options',
    animation: 0,
    maxCount: 3,
    modalPopover: false,
    asChild: false,
    className: '',
  },
};

export const DestructiveVariant = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    variant: 'destructive',
    defaultValue: [],
    placeholder: 'Select options',
    animation: 0,
    maxCount: 3,
    modalPopover: false,
    asChild: false,
    className: '',
  },
};

export const InvertedVariant = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    variant: 'inverted',
    defaultValue: [],
    placeholder: 'Select options',
    animation: 1,
    maxCount: 5,
    modalPopover: true,
    asChild: false,
    className: 'custom-classname',
  },
};
