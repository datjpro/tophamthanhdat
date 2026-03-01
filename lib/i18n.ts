export type Locale = "vi" | "en";

export type QueryParams = Record<string, string | string[] | undefined>;

export const DEFAULT_LOCALE: Locale = "vi";

function isExternalHref(href: string) {
  return /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function normalizeLocale(value?: string | null): Locale {
  return value?.toLowerCase() === "en" ? "en" : DEFAULT_LOCALE;
}

export function getLocaleFromSearchParams(searchParams?: QueryParams): Locale {
  if (!searchParams) return DEFAULT_LOCALE;

  const lang = searchParams.lang;
  const value = Array.isArray(lang) ? lang[0] : lang;
  return normalizeLocale(value);
}

export function withLocale(href: string, locale: Locale) {
  if (!href || href.startsWith("#") || isExternalHref(href)) {
    return href;
  }

  const [pathAndQuery, hash = ""] = href.split("#");
  const [path, query = ""] = pathAndQuery.split("?");
  const params = new URLSearchParams(query);
  params.set("lang", locale);

  const nextQuery = params.toString();
  const nextPath = nextQuery ? `${path}?${nextQuery}` : path;
  return hash ? `${nextPath}#${hash}` : nextPath;
}
