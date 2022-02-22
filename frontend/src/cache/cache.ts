import {makeVar} from "@apollo/client";


export const isLogging = makeVar(!!localStorage.getItem('token'));