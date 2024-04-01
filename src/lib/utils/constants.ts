export const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,12}$/;
export const nameValidator = /^[\w]+([-_\s]{1}[a-z0-9]+)*$/i;
export const numberValidator = /^\d*[.]?\d*$/;
export const feeValidator = /^(0\.0*[1-9]\d*|\d+(\.\d+)?)$/;
export const regexUuid =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
export const einValidator = /^\d{9}$/;
export const einValidatorOld = /^[0-9]\d?-\d{7}$/;

export const phoneValidator =
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const phoneValidatorBd = /^\+\d{13}$/;
export const zipValidator = /^[0-9]{5}(?:-[0-9]{4})?$/;

export const passwordValidatorLogin = /\d{1}|[#?!@$%^&*-]{1}/;
export const passwordValidatorBackend = /^(?=.*\d)(?=.*[A-Z]).+$/;
export const phoneValidatorAnyNumber = /^[0-9]+$/;

export const latitudeValidator = /^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?))$/;
export const longitudeValidator =
    /^([-+]?((1[0-7]\d(\.\d+)?|180(\.0+)?)|([0-9]\d?(\.\d+)?)))$/;

export const isEmptyString = (value: string) => value.toString().trim() !== "";
export const isEmptyNumber = (value: number) => value.toString().trim() !== "";
export const requiredMessage = "This field is required";

export const emptyTableData = [
    { _id: "1", name: "-" },
    { _id: "2", name: "-" },
    { _id: "3", name: "-" },
    { _id: "4", name: "-" },
    { _id: "5", name: "-" },
    { _id: "6", name: "-" },
    { _id: "7", name: "-" },
    { _id: "8", name: "-" },
    { _id: "9", name: "-" },
    { _id: "10", name: "-" },
];

export const countryListItems = [
    {
        _id: "United States",
        name: "United States",
        label: "United States",
        country: "United States",
    },
];

export const ApiPath = {
    LOGIN: "/login",
    REGISTER: "/register",
};

export const RoutePath = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    WAITLIST: "/waitlist",
    ANALYTICS: "/analytics",
    LOCATIONS: "/locations",
    DISPLAY: "/display",
    SCHEDULE: "/schedule",
    SERVING: "/serving",
    SETTINGS: "/settings",
    TEAM_MEMBERS: "/team-members",
};
