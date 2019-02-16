import { FormSubmitHandler } from "redux-form";
import { FormEvent } from "react";

export interface IJoinSubmitType {
    name?: string;
    id?: string;
    password?: string;
}

export interface IJoinFormType {
    handleSubmit(e: FormSubmitHandler<{}, {}, string>|FormEvent<HTMLFormElement>): void;
}

export interface ILoginSubmitType {
    id?: string;
    password?: string;
}

export interface ILoginFormType {
    handleSubmit(e: FormSubmitHandler<{}, {}, string>|FormEvent<HTMLFormElement>): void;
}