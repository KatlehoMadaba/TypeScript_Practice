//createAction is used to simplify the creation of Redux action creators by automatically generating an action object with a type and a payload.
import { createAction } from "redux-actions";


//enum is for action types , help you define a set of named constants
//Enums in TypeScript help you define a set of named constants. Here, setTheme is a constant with the string value "SET_THEME".
export enum ThemeActionEnums{
    setTheme="SET_THEME",
}
//This interface specifies the shape of the payload for the setTheme action.
//The payload must be an object with a single property, theme, which is of type string.

interface SetThemePayload{
    theme:string;
}

// The first generic (SetThemePayload) is the type of the payload that the resulting action will have.return type
// The second generic (SetThemePayload) is the type of the argument that the payload creator function receives.argument type

// export const setThemeAction = createAction<SetThemePayload,SetThemePayload>(
//     ThemeActionEnums.setTheme,
//     ({theme})=>({theme})
// );

export const setThemeAction = createAction<SetThemePayload, SetThemePayload>(
    ThemeActionEnums.setTheme,//Action Type:"SET_THEME"
    (payload: SetThemePayload) => payload//Payload Creator Function 
  );
  