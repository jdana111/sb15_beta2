import { instance, deserializer } from "./config";
import { EmptyResponseError } from "errors/customErrors";
import { Serializer } from "jsonapi-serializer";

export default async function abstractApiCall(method, url, object) {
  try {
    const response = await instance[method](url);
    const deserializedResponse = await deserializer.deserialize(response.data);
    if (
      !deserializedResponse ||
      (typeof deserializedResponse === "object" &&
        Object.keys(deserializedResponse).length === 0) ||
      (Array.isArray(deserializedResponse) && deserializedResponse.length === 0)
    ) {
      throw new EmptyResponseError('empty');
    }
    return deserializedResponse;
  } catch (error) {
    if (error instanceof EmptyResponseError) {
      console.log('EmptyResponseError works')
    } else {
      throw new Error('general'); 
    }
  }
}

// The 12 - 14 block gets tricky in that you could get an empty object or array.
// Create a possible enumeration task: Once we toggle over to TypeScript, I could create enumerations for:
// a) method
// b) object (city, program, property, contact...)
// Take a look at the ChatGPT thread. throw error; should do the trick in the catch block!
