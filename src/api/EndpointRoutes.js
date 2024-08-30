export const REMOTE_BASE_URL = "https://backend.myguardian.mobi/api/v1";

export const BASE_URL = REMOTE_BASE_URL;
//Auth
export const REGISTRATION_ENDPOINT_PATH = `${BASE_URL}/auth/register`;
export const PHONE_LOGIN_ENDPOINT_PATH = `${BASE_URL}/auth/login`;
export const VERIFY_OTP_ENDPOINT_PATH = `${BASE_URL}/auth/verify-otp`;

export const FIREBASE_LOGIN_ENDPOINT_PATH = `${BASE_URL}/auth/fire-base-login`;
export const RESEND_OTP_ENDPOINT_PATH = `${BASE_URL}/auth/send-otp`;
export const DEVICE_ID_UPDATE_ENDPOINT_PATH = `${BASE_URL}/users/device-details`;
export const ADVERTS_ENDPOINT_PATH = `${BASE_URL}/adverts`;
export const CIRCLES_ENDPOINT_PATH = `${BASE_URL}/circle`;
export const CIRCLE_CHAT_HEADS_ENDPOINT_PATH = `${BASE_URL}/circle/chat-heads`;
export const ADD_CIRCLE_CONTACT_ENDPOINT_PATH = `${BASE_URL}/circle/add-contact`;
export const LOCATION_HISTORY_ENDPOINT_PATH = `${BASE_URL}/location-history/add`;
export const JOIN_CIRCLE_CONTACT_ENDPOINT_PATH = `${BASE_URL}/circle/{0}/join`;
export const SEND_JOIN_CIRCLE_REQUEST_ENDPOINT_PATH = `${BASE_URL}/circle/send-join-request/{0}`;
export const ACCEPT_JOIN_CIRCLE_REQUEST_ENDPOINT_PATH = `${BASE_URL}/circle/accept-join-requests/{0}`;

export const CHAT_HEADS_ENDPOINT_PATH = `${BASE_URL}/chat/heads`;
export const CHATS_ENDPOINT_PATH = `${BASE_URL}/chat`;
export const CHATS_MESSAGES_PATH = `${BASE_URL}/chat/messages`;

//Settings
export const REFFERALS_ENDPOINT_PATH = `${BASE_URL}/lookups/app-referrers`;
export const UPDATE_REFERRER_ENDPOINT_PATH = `${BASE_URL}/users/update-referred-by`;
export const SUPPORTED_LAGUAGES_ENDPOINT_PATH = `${BASE_URL}/lookups/languages`;
export const APP_SETTINGS_ENDPOINT_PATH = `${BASE_URL}/v2/Settings`;
export const SOS_CANCELLATION_REASONS_ENDPOINT_PATH = `${BASE_URL}/lookups/sos-cancellation-reasons`;

//Event Logs
export const POST_ANONYMOUS_EVENT_LOGS_ENDPOINT_PATH = `${BASE_URL}/v2/EventLogs/Anonymous`;
export const POST_AUTHENTICATED_EVENT_LOGS_ENDPOINT_PATH = `${BASE_URL}/v2/EventLogs/Authenticated`;
export const GET_ANONYMOUS_QUEUE_CONFIG_ENDPOINT_PATH = `${BASE_URL}/v2/EventLogs/AnonymousQueueConfig`;
export const GET_AUTHENTICATED_QUEUE_CONFIG_ENDPOINT_PATH = `${BASE_URL}/v2/EventLogs/AuthenticatedQueueConfig`;

export const SOS_ENDPOINT_PATH = `${BASE_URL}/sos`;
export const SOS_FIRE_ENDPOINT_PATH = `${BASE_URL}/sos/fire`;

export const ADDRESSES_ENDPOINT_PATH = `${BASE_URL}/addresses`;
export const MAP_CRED = "AIzaSyAJv0I3XHX-oRvQrL0VK2bK-bKCBY1vY-o";

export const WALLET_BALANCE_PATH = `${BASE_URL}/wallet`;
export const WALLET_TRANSACTIONS_ENDPOINT_PATH = `${BASE_URL}/wallet/transactions`;
export const WALLET_WITHDRAW_ENDPOINT_PATH = `${BASE_URL}/wallet/withdraw`;
export const DEPOSIT_ENDPOINT_PATH = `${BASE_URL}/wallet/initiate-deposit`;
export const VALIDATE_USER_DETAILS_ENDPOINT_PATH = `${BASE_URL}/wallet/validate-user-details`;
export const IN_APP_TRANSFER_ENDPOINT_PATH = `${BASE_URL}/wallet/in-app-transfer`;
export const CHECK_TXN_STATUS_ENDPOINT_PATH = `${BASE_URL}/wallet/check-status`;
export const AUTH_CARDTXN_ENDPOINT_PATH = `${BASE_URL}/wallet/authorise-card-txn`;

export const PRODUCTS_ENDPOINT_PATH = `${BASE_URL}/products`;
export const ORDER_ENDPOINT_PATH = `${BASE_URL}/orders`;

export const NOTIFICATIONS_ENDPOINT_PATH = `${BASE_URL}/notifications`;
export const BADGES_ENDPOINT_PATH = `${BASE_URL}/notifications/badges`;
export const FRIENDS_ENDPOINT_PATH = `${BASE_URL}/users/friends`;
export const GUARDIANS_AROUND_ME_ENDPOINT_PATH = `${BASE_URL}/location-history/around-me`;

export const AUDIO_TRANSLATION_ENDPOINT_PATH = `${BASE_URL}/translator/audio`;
export const IMAGE_TRANSLATION_ENDPOINT_PATH = `${BASE_URL}/translator/image`;
