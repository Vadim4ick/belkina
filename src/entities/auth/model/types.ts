export type SOCIAL_PROVIDER = "oauth_google" | "oauth_custom_yandex";
export type FORM_MODE = "sign-in" | "sign-up";

export const MAPPING_FORM_AUTH_MODE = {
  "sign-in": "sign-in",
  "sign-up": "sign-up",
} as const;
