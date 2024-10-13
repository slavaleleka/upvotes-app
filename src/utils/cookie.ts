
const COOKIE_NAME = 'upvote_app_state'

/**
 * Set the value to the cookie with name {@link COOKIE_NAME} for 1 year.
 *
 * @param value The value to set.
 */
export const setCookieValue = (value: string) => {
    document.cookie = `${COOKIE_NAME}=${value};max-age=31536000;path=/`;
};

/**
 * Retrieve the value from the cookie with name {@link COOKIE_NAME}.
 *
 * @returns Cookie value or null if not found or empty.
 */
export const getCookieValue = () => {
    const { cookie } = document;

    if (cookie.indexOf(COOKIE_NAME) === -1) {
        return null;
    }

    const value = cookie.trim().split('=')[1].trim();

    if (value.length === 0) {
        return null;
    }

    return value;
};
