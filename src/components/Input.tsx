/**
 * A reusable input component with predefined styles.
 *
 * @param props - The props to be passed to the input element. These can include
 *                any valid attributes for an HTML input element.
 *
 * @returns A styled input element.
 */

function Input({ ...props }) {
  return (
    <input
      className='rounded-md border-background-border bg-field'
      {...props}
    />
  )
}

export default Input
