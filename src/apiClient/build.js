
// Lines 3 – 15 show Natho's rough abstracted "build" syntax. Lines 17 – 29 show the original code.
// Don't worry about lines 8 – 10. That's a separate issue associated with error-handling.
// Finally, take a look at lines 33 – 38. There's some interesting sub-text here. 
const buildApiCall = async (method, url) => {
  try {
    const response = await instance[method](url);
    const programs = await deserializer.deserialize(response.data);
    if (!programs || programs.length === 0) {
      throw new Error('Natho, the goal is to throw something meaningful to the user.');
    }
    return programs;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to retrieve programs associated with city.id = ${cityId}.`);
  }
};

const getCityPrograms = async (cityId) => {
  try {
    const response = await instance.get("/cities/" + cityId + "/programs");
    const programs = await deserializer.deserialize(response.data);
    if (!programs || programs.length === 0) {
      throw new Error('Natho, the goal is to throw something meaningful to the user.');
    }
    return programs;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to retrieve programs associated with city.id = ${cityId}.`);
  }
};

const cities = {
  get: (cityId) => buildApiCall('get', `/cities/${cityId}/programs`)
  udpate:
  delete:
  list:
}
