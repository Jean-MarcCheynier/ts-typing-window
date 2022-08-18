type MyWindow = Window & typeof globalThis & {
    myVar: string;
}

export const myWindow = (<MyWindow> window);

export interface EmloyeeWindow extends Window {
    name: string;
    salary: number;

}