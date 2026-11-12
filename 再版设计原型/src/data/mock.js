export const currentSlot = {
  date: '11月12日 周三',
  now: '13:41',
  gap: {
    start: '13:46',
    end: '14:30',
    minutes: 45,
    leftPercent: 37.5,
    widthPercent: 36.7,
    nowPercent: 34.2,
  },
  recommendation: {
    course: '微观经济学',
    chapter: '第 3 章',
    topic: '边际效用与消费者均衡',
    minutes: 25,
    mastered: 62,
    library: '附近图书馆有空座',
    seat: 'A 区 · 12 号座',
    walkMinutes: 6,
  },
  ticks: [
    { label: '13:00', position: 0 },
    { label: '13:45', position: 37.5 },
    { label: '14:30', position: 74.2 },
    { label: '15:00', position: 100 },
  ],
}

export const toastMessages = {
  booked: {
    title: '已为您预约图书馆 A区 12号座位',
    detail: '13:50 前到馆 · 座位保留 20 分钟',
  },
  custom: {
    title: '已进入自定义规划',
    detail: '可按你的节奏调整任务与时长',
  },
}