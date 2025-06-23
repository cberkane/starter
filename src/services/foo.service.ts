import { Foo } from "../types/foo.types";

export const listFoos = (): Foo => {
    return "Welcome to all the foos";
};

export const getFoo = (id: string): Foo => {
    return `Welcome to foo number ${id}`;
};

export const addFoo = (foo: { name: string; description: string }): Foo => {
    return `Added foo with name: ${foo.name} and description: ${foo.description}`;
};