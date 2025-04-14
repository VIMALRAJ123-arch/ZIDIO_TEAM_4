interface CurrencyFormatterProps {
  amount: number
  currency?: "INR" | "USD" | "EUR" | "GBP"
  locale?: string
}

export function CurrencyFormatter({ amount, currency = "INR", locale = "en-IN" }: CurrencyFormatterProps) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })

  return formatter.format(amount)
}
