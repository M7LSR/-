const SEAT_ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const AVAILABLE_KEYS = new Set([
  '0-9', '1-8', '1-9', '2-9', '3-8', '4-9', '5-9', '6-8', '7-9', '8-8',
  '9-9', '2-3', '2-4', '3-3', '4-4', '5-5', '6-4', '0-4', '1-6', '2-7',
  '3-5', '4-2', '5-8', '6-6', '7-4', '8-6', '9-2', '1-1', '3-7', '4-7',
  '5-2', '7-7', '8-1',
])

const PLUG_KEYS = new Set([
  '0-4', '1-6', '2-7', '3-5', '4-2', '5-8', '6-6', '7-4', '8-6', '9-2',
])

export const SEATS = SEAT_ROWS.flatMap((row, r) =>
  Array.from({ length: 10 }, (_, c) => {
    const recommended = r === 0 && c === 1
    const key = `${r}-${c}`

    return {
      id: recommended ? 'A-12' : `${row}-${c + 1}`,
      key,
      recommended,
      available: recommended || AVAILABLE_KEYS.has(key),
      window: c >= 8,
      plug: PLUG_KEYS.has(key),
      quiet: r >= 2 && r <= 6 && c >= 2 && c <= 5,
    }
  }),
)

export const SEAT_FILTERS = [
  { id: 'window', label: '靠窗' },
  { id: 'plug', label: '插座' },
  { id: 'quiet', label: '安静区' },
]