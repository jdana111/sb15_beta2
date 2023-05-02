import { instance, deserializer } from "./configApiClient";
import { EmptyResponseError } from "errors/customErrors";

export default async function abstractApiCall(method, url) {
  try {
    const responsePayload = await instance[method](url);
    const deserializedResponsePayload = await deserializer.deserialize(
      responsePayload.data
    );
    if (
      !deserializedResponsePayload ||
      (typeof deserializedResponsePayload === "object" &&
        Object.keys(deserializedResponsePayload).length === 0) ||
      (Array.isArray(deserializedResponsePayload) &&
        deserializedResponsePayload.length === 0)
    ) {
      throw new EmptyResponseError(
        `The ${method.toUpperCase()} request for the following data, ${url}, produced an empty response.`
      );
    }
    return deserializedResponsePayload;
  } catch (error) {
    console.log('catch')
    throw error;
  }
}

    // I think this as simplle as throw error; I don't think we need a conditional. 
    // Whether the error is generated automatically or is the result of our throw new EmptyResponseError, it should work. 
    // Talk to Natho. Is there a way to get the error to the browser without "error bubbling"?


// You still need to do createCity and updateCity.
// Since the citySerializer needs all the city fields, it will need to lead in the implementation file and not this file.
// You'll need a new parameter, serializedRequestPayload. createCity and updateCity will use it.
// const createCity = async (data) => {
//   try {
//     const serializedData = await citySerializer.serialize(data);
//     const response = await instance.post("cities", serializedData);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Unable to create city");
//   }
// };

// Create a possible enumeration task: Once we toggle over to TypeScript, I could create enumerations for:
// a) method - I really don't like
// Take a look at the ChatGPT thread. throw error; should do the trick in the catch block!
// You're going to need 45 - 60 minutes to push the error handling stuff from ChatGPT to Yellow Lesson. (There's too much good stuff there to ignore it.)
// You need to implement DELETE as well.
