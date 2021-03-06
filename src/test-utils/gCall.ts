import { graphql, } from "graphql";
import { Maybe } from "type-graphql";

import { createSchema } from "../utils/createSchema";

interface Options {
    source: string;
    variableValues?: Maybe<{
        [key: string]: any;
    }>
}

export const gCall = async ({ source, variableValues }: Options) => {
    return graphql({
        schema: await createSchema(),
        source,
        variableValues
    });
}