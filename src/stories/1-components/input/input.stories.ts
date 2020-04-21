export default {
  title: 'Components|Input',
  template: `<input/>`,
};

export const MultiSelect = () => ({
  template: `
    <label><div>Label:</div>
      <select>
        <option value="" selected disabled hidden>Choose an option</option>
        <option value="test">Option 1</option>
        <option value="other-test">Option 2</option>
      </select>
    </label>`,
});

MultiSelect.story = {
  parameters: {
    notes: 'MultiSelect',
    abstract: {
      url: "https://share.goabstract.com/38f73276-af64-403d-9696-ad5202d85d02",
    }
  },
};
