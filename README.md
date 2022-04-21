# EXAMPLE WEB

Example Web is a web to view list of random user. There's a couple of features like:
- Filter by gender
- Search a user
- Sort ascending or descending on all field column

Live site can visit at:
https://sample-host-5329e.web.app/

# PREFACE

This Project created by `npx create-react-app my-app --template typescript`, so this is a simple project using react.js, and typescript. This Project use the clean architecture design pattern that I try to created by my self, so this is maybe not perfect but it's enough to separate concern. If you have an idea to make it better please notice me. I'm still learn, and I ready to hear you. 

# HOW TO START IN LOCAL

- use `npm` to install dependencies, or run this command on your terminal `npm install`.
- and run `npm start` to start the local.

# FILE STRUCTURE (inside src)

```
├── @core
│    ├── entity         -> place of all object and type model
│    ├── interactor    	-> place of all usecase interactor, also the mock data if the interaction is a API request
│    ├── interface      -> place of all DTO and response object model
│    ├── mapper         -> place of all adapter function base on interactor
│    └── usecase       	-> place of all usecase abstract class for each page
├── pages               -> place of all view/page
├── service            	-> place of all service
```

# CREATE NEW COMPONENT

If the component use in many pages you can create `components` folder inside src, but if the component just use in the 1 page, please create `components` folder inside `pages/<page-name>` and follow the structures bellow.

```
├── components
    └── new-component
        ├── NewComponent.tsx            -> for view of component
        ├── NewComponent.interface.ts   -> for data model of component
        ├── NewComponent.scss           -> for css rule of component
		└── README.md                   -> for documentation of component
```

or for more complex component need more view

```
├── components
    └── custom-select
        ├── CustomSelect.tsx                -> main view of component
        ├── SelectOption.tsx                -> another separate component from main
        ├── MultiSelectOption.tsx           -> another separate component from main
        ├── CustomSelect.interface.ts       -> for data model of component
        ├── NewComponent.scss               -> for css rule of component
        └── README.md                       -> for documentation of component
```

# CREATE NEW PAGE

Bellow is the place to create new page.

```
├── pages
    └── page-folder-name
        └── NewPage.tsx -> for page view
```

# CREATE PAGE INTERACTION

#### Step 1

You must create abstract class of usecase for your new page. Bellow is the place to create abstract usecase.

```
├── @core
    └── usecase
        └── GetLeaveType.usecase.ts -> containt abstract class, and function that must implement in the page. Don't forget give model in each input/ouput of abraction function.
```

#### Step 2 (create interactor)

You need to create interactor to execute and fulfill abstract usecase. Bellow is how to create interactor.

- First step you must create interface file for put data model of your interactor. Bellow is the place to create interactor interface.

```
├── @core
    ├── interface
        └── NewInteractor.interface.ts     -> data model of interactor
```

- Second step create the interactor file.

```
    ├── @core
    ├── interactor
        └── NewInteractor.interactor.ts       -> it's contain export default function, and export const if want to make mock of API request
```

- Third step is create a mapper, if your interactor no need convert data to fulfill view structure data, you can skip this step.

```
    ├── @core
    ├── mapper
        └── NewInteractor.mapper.ts       -> it's contain export function to convert data
```

#### Step 3

Create usecase implementation file.

```
├── pages
    └── NewPage.impl.ts -> this file contain class that implement of abstract usecase class in step 1, also convert data, and more logic like call 2 or more interactor and combine it to fulfill needs data in view
```

After that you can create new object of it, and called it inside view page (refer to step 1).

# HOW TO DEPLOY

This Project use firebase hosting, because it simple. Bellow how to deploy this project.

#### Step 1

Login firebase in the terminal with execute command `fireabse login`.

#### Step 2

Build react project with execute command `npm run build`.

#### Step 3

Run command `firebase deploy`, after execute complete you will get the Hosting URL.
