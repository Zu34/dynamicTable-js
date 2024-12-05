# Resposive Table of data
## Generating data into Table using Simple DOM

- **Uses `innerHTML`:**
  - The entire table is constructed as a single HTML string in memory.
  - This string is directly set as the `innerHTML` of the table body in one operation.

## 2. **Loop Type**

**`for` loop:**
  - Uses an imperative approach with index-based iteration.
  - Processes the `employees` array in a linear fashion.
  - All rows are concatenated into a single string and added to the DOM at once.

 **Single `innerHTML` update:**
  - Only one DOM update is performed, which is generally faster because DOM updates are computationally expensive.
  - Suitable for creating a moderate number of elements in one go, but doesn’t allow direct manipulation of individual elements during creation.

  ## **Theme **
    **Theme Settings**
    ![theme settings](./Recording.gif)
