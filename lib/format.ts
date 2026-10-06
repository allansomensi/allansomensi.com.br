const TIME_ZONE = "America/Sao_Paulo";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(value: number) {
  return currency.format(value);
}

/** Decompõe uma data ISO nas partes usadas pelos cards da agenda. */
export function eventDateParts(iso: string) {
  const date = new Date(iso);
  const part = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("pt-BR", { timeZone: TIME_ZONE, ...options })
      .format(date)
      .replace(".", "");

  return {
    day: part({ day: "2-digit" }),
    month: part({ month: "short" }),
    weekday: part({ weekday: "short" }),
    year: part({ year: "numeric" }),
    time: part({ hour: "2-digit", minute: "2-digit" }),
  };
}
