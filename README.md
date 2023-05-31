In this project, I build a **Details App** by applying the concepts I have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dtylsgfeq/image/upload/v1685520339/Screenshot_2023-05-31_133418_o63bqm.png" alt="details app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>


### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Complete Instructions

<details>
<summary>Functionalities added</summary>
<br/>

The app must have the following functionalities

- Initially, the list of appointments should be empty and the title input ,email,gender and date input should be empty
- When non-empty values are provided for title and date and the **Add** button is clicked,
  - A new appointment should be added to the list of appointments
  - The value inside the input elements for title and date should be updated to their initial values
- When the **Star** on an appointment is clicked, the appointment should be starred
- The status of the **Starred** filter is updated by clicking on it
- When the **Starred** filter is active, all the starred appointments should be filtered and displayed
- When the **Starred** filter is inactive, the list of all appointments should be displayed
</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/appointments-app-component-breakdown-structure.png" alt="component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Details/index.js`
- `src/components/Details/index.css`
- `src/components/DetailItem/index.js`
- `src/components/DetailItem/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- The HTML input element with the type `date` is designed for the user to select the date from a date picker

  ```jsx
  <input type="date" />
  ```

- The `format` function in the date-fns package can be used to get the formatted date string in the given format

  ```jsx
  import {format} from 'date-fns'

  console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE')) // 19 July 2021, Monday
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>


- For the `format` function, passed the format string `dd MMMM yyyy, EEEE` as the second argument
- The star button in each detail have the data-testid as **star**
- The star image in each detail have alt as **star**

</details>



<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #9796f0; width: 150px; padding: 10px; color: black">Hex: #9796f0</div>
<div style="background-color: #fbc7d4; width: 150px; padding: 10px; color: black">Hex: #fbc7d4</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #8b5cf6; width: 150px; padding: 10px; color: black">Hex: #8b5cf6</div>
<div style="background-color: #b5b7c4; width: 150px; padding: 10px; color: black">Hex: #b5b7c4</div>
<div style="background-color: #9897f0; width: 150px; padding: 10px; color: black">Hex: #9897f0</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.

