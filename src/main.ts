/**************************************************************************************************/
//1. VARIABLES
let hello: string = "world";
console.log(hello);

/**************************************************************************************************/
//2. FUNCTIONS
// const getFullName = (name: string, surname: string): string => {
//     return name + ' ' + surname;
// }

// console.log(getFullName("Typescript", "Lessons"));

/**************************************************************************************************/
//3. INTERFACES-entities in TS which helps us create objects with certain properties
//By default, all properties set inside an interface are mandatory
//Interfaces give the best autocomplete
// interface IUser {
//     name: string;
//     age?: number;
//     getMessage(): string
// }

/**************************************************************************************************/
//4. OBJECTS
// const user: {name: string, age: number} = {
// const user: IUser = {
//     name: "Monster",
//     age: 30,
//     getMessage() {
//         return "Hello" + name;
//     }
// }

// const user2: IUser = {
//     name: "Jack",
//     getMessage() {
//         return "Hello" + name;
//     }
// }

// console.log(user.name);
// console.log(user.getMessage());

/**************************************************************************************************/
//5. TYPES AND UNIONS
//Union operator - operator to combine data types
// let username: string = "alex";

// let pageName: string | number = "1";

// let errorMessage: string | null = null;

// //Type aliases
// type ID = string; // human readable
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;

// const popularTags: PopularTag[] = ["dragon", "coffee"];

// const dragonsTag: MaybePopularTag = "dragon";

// interface UserInterface {
// 	id: ID;
// 	name: string;
// 	surname: string;
// }

// let user: UserInterface | null = null;

// //bad example below
// let someProp: string | number | null | undefined | string[] | object;

/**************************************************************************************************/
//6. ANY/VOID/NEVER/UNKNOWN
//Void - no return
// const doSomething = (): void => {
// 	console.log("doSomething");
// };

//Any - worst existing type from Typescript; it doesn't give the TS errors for checking types
// better to avoid or MAX. 5/project!
// let badExample: any = "foo";
// badExample = badExample.name;

//Never - function with never can't be executed to the end, i.e. a function that never ends
// const doSomething = (): never => {
// throw "never";
// };

//Unknown - we can't assign unknown directly in other type
// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;

//type assertion = converting one type to another
//also known as <"as" data type>
// let s2: string = vUnknown as string;
// let pageNumber: string = "1";
// let numericPageNumber: number = (pageNumber as unknown) as number;

// console.log(vAny.foo());
// console.log(vUnknown.foo());

/**************************************************************************************************/
//7. WORKING WITH DOM
// let page: any = "1";
// let pageNumber = page as string;

// //TS has lots of types for DOM out of the box
// //TS doesn't know about mark up, it knows only data types
// //Element is the highest class in hierarchy
// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement", someElement.value);

// someElement.addEventListener("blur", (event) => {
//     const target = event.target as HTMLInputElement;
//     console.log("event", target.value);
// })


/**************************************************************************************************/
//8. CLASSES IN TYPESCRIPT
//Classes are sugar around prototypes
// interface UserInterface {
//     getFullname(): string;
// }

// class User implements UserInterface{
//     //protected means that property is accessible inside the class and to its inheriting children
//     protected firstName: string;
//     //private means that property is accessible only inside the class
//     private lastName: string;
//     readonly unchangeableName: string; //cannot be changed
//     //static properties are accessible only on the class and not on its instances
//     static readonly maxAge = 50;
    
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.unchangeableName = firstName;
//     }
    
//     changeUnchangeableName(): void {
//         /*this.unchangeableName = "foo";*/
//     }
    
//     //everything is public by default in TS
//     getFullname(): string {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// class Admin extends User {
//     private editor: string;

//     setEditor(editor: string): void {
//         this.editor = editor;
//     }

//     getEditor(): string {
//         return this.editor;
//     }
// }

// const user = new User("Monster", "lessons");    
// console.log(user.getFullname);
// console.log(User.maxAge);

// const admin = new Admin("Foo", "Bar");
// console.log(admin.getFullname);
// console.log(admin.getEditor);


/**************************************************************************************************/
//9. GENERICS IN TYPESCRIPT
//All generic data types are written inside "<>"
//Generics allow us to provide different data types
// const addId = <T extends object>(obj: T) => {
//     const id = Math.random().toString(16);
//     return {
//         ...obj,
//         id,
//     }
// }

// //Generics with interface
// interface UserInterface<T, V> {
//     name: string;
//     data: T;
//     meta: V;
// }

// const user: UserInterface<{meta: string}, string> = {
//     name: "Jack",
//     data: {
//         meta: "foo"
//     },
//     meta: "bar"
// }

// const user2: UserInterface<string[], string> = {
//     name: "John",
//     data: ["foo", "bar", "baz"],
//     meta: "baz"
// }

// /*const badResult = addId<string>("foo");*/
// const result = addId<UserInterface<{meta: string}, string>>(user);
// const result2 = addId<UserInterface<string[], string>>(user2);
// console.log("result", result);
// console.log("result2", result2);

//Ramda library
//npm install ramda
// import * as R from 'ramda';

// const updatedArray = R.append<string>("baz", ["foo", "bar"]);
// const searchStr = "foo";
// const hasSearchedString = R.any<string>((el: string) => el.contains(searchStr), ["fooooo", "bar", "baz"]);


/**************************************************************************************************/
//9. ENUMS IN TYPESCRIPT
//The values of an enum are incremented from zero
//We can use enum as a value abd a data type
//Use enums for all constants in your application
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }

// console.log(statuses.inProgress);

// enum StatusEnum {
//     NotStarted = "notStarted",
//     InProgress = "inProgress",
//     Done = "done"
// }

// interface Task {
//     id: string;
//     status: StatusEnum;
// }

// let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

// notStartedStatus = StatusEnum.Done;

// console.log(StatusEnum.InProgress)