import axios from "axios";

import {jsonBaseURL, spaceXBaseURL} from "../configs/urls";

const axiosJSONService = axios.create({baseURL: jsonBaseURL});
const axiosSpaceXService = axios.create({baseURL: spaceXBaseURL});

export {axiosJSONService, axiosSpaceXService};
