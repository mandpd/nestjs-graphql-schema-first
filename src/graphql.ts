
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract hello(): string | Promise<string>;
}

export class Consultant {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export class Engagement {
    id: string;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    status: string;
    created_at: string;
    updated_at: string;
    consultant: Nullable<Consultant>[];
}

type Nullable<T> = T | null;
