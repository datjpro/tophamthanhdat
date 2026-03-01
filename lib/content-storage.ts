const CONTENT_OVERRIDES_KEY = "td.content.overrides.v1";
export const CONTENT_OVERRIDES_UPDATED_EVENT = "td-content-overrides-updated";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function readContentOverrides(): unknown {
  if (!canUseStorage()) return null;

  const raw = window.localStorage.getItem(CONTENT_OVERRIDES_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function writeContentOverrides(value: unknown) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(CONTENT_OVERRIDES_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event(CONTENT_OVERRIDES_UPDATED_EVENT));
}

export function clearContentOverrides() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(CONTENT_OVERRIDES_KEY);
  window.dispatchEvent(new Event(CONTENT_OVERRIDES_UPDATED_EVENT));
}
