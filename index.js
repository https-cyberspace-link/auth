import Cookies from 'js-cookie';
import { COMMON_DOMIN, TOKEN_NAME } from '@cyberspace.link/env';
export function getToken () { return Cookies.get(TOKEN_NAME) }
export function setToken (token) { Cookies.set(TOKEN_NAME, token, { domain: COMMON_DOMIN }) }
export function removeToken() { Cookies.remove(TOKEN_NAME); return Cookies.remove(TOKEN_NAME, { domain: COMMON_DOMIN })}