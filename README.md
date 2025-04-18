# @ilyaxtom/custom-components-lib

Task <a href="https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view">custom-component-lib</a> <br/>

## Usage
Run ```npm i @ilyaxtom/custom-components-lib``` to  install the library in your project<br/>
Then inmport library components into you source file <br/>
```javascript
import {Button, Checkbox, Modal, Select, Switch, TextField} from '@ilyaxtom/custom-components-lib';
```
## Components
### Button
A customizable button component built on top of the native HTML `<button/>` element, extended with styling props and states.

- `variant`: `'text'` | `'contained'` | `'outlined'` – defines the button style, default is `'contained'`
- `sz`: `'small'` | `'medium'` | `'large'` – sets the button size, default is `'medium'`
- `color`: `'secondary'` | `'success'` | `'error'` – applies a color theme to the button, default is `'secondary'`
- `disabled`: `boolean` – disables the button when `true`, default is `false`
- `loading`: `boolean` – shows a loading state and disables interaction when `true`, default is `false`  
```javascript
<Button
  variant="outlined"
  sz="large"
  color="success"
  onClick={() => console.log('Clicked!')}
>
  Submit
</Button>
```
### Checkbox
A customizable checkbox component built on top of the native HTML `<input type="checkbox"/>` element, extended with styling props and label support.

- `sz`: `'small'` | `'medium'` | `'large'` – sets the checkbox size, default is `'medium'`
- `color`: `'blue'` | `'purple'` | `'green'` | `'grey'` | `'pink'` – applies a color theme to the checkbox, default is `'blue'`
- `label`: `string` – text label displayed next to the checkbox
- `required`: `boolean` – marks the checkbox as required in a form, default is `false`
- `disabled`: `boolean` – disables the checkbox when `true`, default is `false`

```javascript
<Checkbox
  sz="small"
  color="green"
  label="Accept terms and conditions"
  required
/>
```
### Switch
A customizable switch (toggle) component built on top of the native HTML `<input type="checkbox"/>` element, styled to represent an on/off toggle with optional label and sizing.

- `sz`: `'small'` | `'medium'` | `'large'` – sets the switch size, default is `'small'`
- `color`: `'default'` | `'purple'` | `'orange'` | `'grey'` | `'pink'` – applies a color theme to the switch, default is `'default'`
- `label`: `string` – text label displayed next to the switch
- `disabled`: `boolean` – disables the switch when `true`, default is `false`
- `defaultChecked`: `boolean` – determines whether the switch is initially checked, default is `false`
- `required`: `boolean` – marks the switch as required in a form, default is `false`

```javascript
<Switch
  sz="medium"
  color="orange"
  label="Enable notifications"
  defaultChecked
/>
```
### TextField
A flexible input component supporting different variants, input types, and optional multiline mode. Built to handle both standard input fields and textareas, with enhanced styling.

- `variant`: `'outlined'` | `'filled'` | `'standard'` – defines the style of the text field, default is `'outlined'`
- `type`: `'text'` | `'number'` | `'password'` – sets the input type, default is `'text'`
- `label`: `string` – label displayed in the input
- `helperText`: `string` – additional helper text displayed below the input
- `value`: `string` – current value of the input (controlled input)
- `required`: `boolean` – marks the field as required, default is `false`
- `readonly`: `boolean` – makes the field read-only without disabling it, default is `false`
- `disabled`: `boolean` – disables the input when `true`, default is `false`
- `error`: `boolean` – applies styles for error case, default is `false`
- `multiline`: `boolean` – renders a `<textarea>` instead of a single-line `<input>`, default is `false`
- `onChange`: `(e: ChangeEvent<TextFieldElements>) => void` – event handler triggered on value change

```javascript
<TextField
  variant="filled"
  type="password"
  label="Password"
  helperText="Minimum 8 characters"
  required
  error
  onChange={(e) => console.log(e.target.value)}
/>
```
### Select
A customizable dropdown/select component supporting different variants, sizes, and form states. Allows composition with custom option components via `children`.

- `variant`: `'outlined'` | `'filled'` | `'standard'` – defines the visual style of the select, default is `'outlined'`
- `sz`: `'small'` | `'standard'` – sets the size of the select, default is `'standard'`
- `selectedTitle`: `string` – text displayed as the currently selected value
- `label`: `string` – label displayed in the select field
- `helperText`: `string` – additional helper text displayed below the select field
- `disabled`: `boolean` – disables the select when `true`, default is `false`
- `error`: `boolean` – applies styles for error case, default is `false`
- `required`: `boolean` – marks the select as required, default is `false`
- `children`: `React.ReactNode` – a list of `SelectItem` components representing options

### SelectItem
Represents a single item inside a `Select` component. Uses a generic `id` and notifies parent on selection.

- `id`: `T` – unique identifier for the option
- `selected`: `boolean` – indicates whether this item is currently selected
- `onChange`: `(id: T) => void` – callback triggered when the item is selected

```javascript
<Select
  variant="outlined"
  sz="small"
  label="Favorite fruit"
  selectedTitle={selectedLabel}
  helperText="Pick one"
  required
>
  <SelectItem id="apple" selected={selectedId === 'apple'} onChange={setSelectedId}>
    Apple
  </SelectItem>
  <SelectItem id="banana" selected={selectedId === 'banana'} onChange={setSelectedId}>
    Banana
  </SelectItem>
  <SelectItem id="cherry" selected={selectedId === 'cherry'} onChange={setSelectedId}>
    Cherry
  </SelectItem>
</Select>
```

### Modal
A flexible modal component, used to display overlay dialogs. Component automatically insert onClose button in modal box.

- `open`: `boolean` – controls whether the modal is visible, default is `false`
- `onOpen`: `() => void` – callback fired when the modal is opened
- `onClose`: `() => void` – callback fired when the modal is closed
- `children`: `React.ReactNode` – content displayed inside the modal

```javascript
<Modal
  open={isOpen}
  onOpen={() => console.log('Modal opened')}
  onClose={() => setIsOpen(false)}
>
  <h2>Modal Title</h2>
  <p>This is the modal content.</p>
  <button onClick={() => setIsOpen(false)}>Close</button>
</Modal>
```
