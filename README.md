

### Project Overview

This project uses React, TypeScript, and Redux. We use i18n for dictionary management and React Bootstrap for some component bases as well as icons. Axios is used to call the API at https://api.weatherapi.com/v1/.

### Initialization

- Use `npm install` to install dependencies.
- Use `npm run start` to start the project.

### Architecture

Within the `src` folder, you will find several subfolders:

- **components**: Contains various components organized by atomic logic.
- **pages**: Contains the potential pages of the project.
- **store**: Contains everything related to the store and Redux, such as reducers or actions.
- **styles**: Contains the project's CSS files - the project's CSS classes follow the BEM standard.
- **translation**: Contains the project's dictionaries.
- **types**: Contains the importable type files of the project.

### Potential Improvements with More Time

- **Better Interface**: The few elements displayed didn't inspire much in terms of interface design. Therefore, very little time was spent on CSS, but I decided to still set up a variable import system to demonstrate its use.

- **Better Data Management**: Despite the implementation of translation keys with i18n, the retrieved data is not adapted to language changes. For instance, we could use Moment.js to change the format of received dates and times.



