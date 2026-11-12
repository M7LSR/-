const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const {
  Armchair,
  ArrowUp,
  BatteryFull,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  Image: ImageIcon,
  LayoutGrid,
  ListChecks,
  MapPin,
  Mic,
  MoreHorizontal,
  Plug,
  Plus,
  Presentation,
  Search,
  Signal,
  SlidersHorizontal,
  Sparkles,
  Sun,
  VolumeX,
  Wand2,
  Wifi,
  X
} = window.LucideReact;
const {
  Area,
  AreaChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} = window.Recharts;
const currentSlot = {
  date: '11月12日 周三',
  now: '13:41',
  gap: {
    start: '13:46',
    end: '14:30',
    minutes: 45,
    leftPercent: 37.5,
    widthPercent: 36.7,
    nowPercent: 34.2
  },
  recommendation: {
    course: '微观经济学',
    chapter: '第 3 章',
    topic: '边际效用与消费者均衡',
    minutes: 25,
    mastered: 62,
    library: '附近图书馆有空座',
    walkMinutes: 6
  },
  ticks: [{
    label: '13:00',
    position: 0
  }, {
    label: '13:45',
    position: 37.5
  }, {
    label: '14:30',
    position: 74.2
  }, {
    label: '15:00',
    position: 100
  }]
};
const toastMessages = {
  booked: {
    title: '已为您预约图书馆 A区 12号座位',
    detail: '13:50 前到馆 · 座位保留 20 分钟'
  },
  custom: {
    title: '已进入自定义规划',
    detail: '可按你的节奏调整任务与时长'
  }
};
const {
  now,
  date,
  gap,
  recommendation,
  ticks
} = currentSlot;
function PhoneShell({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex min-h-screen w-full items-start justify-center overflow-x-hidden overflow-y-auto bg-ink-900 sm:px-6 sm:py-8"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute inset-0 hidden sm:block",
    style: {
      backgroundImage: 'radial-gradient(ellipse 62% 52% at 50% 36%, rgba(255,92,0,0.10), transparent 65%), linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
      backgroundSize: '100% 100%, 64px 64px, 64px 64px',
      maskImage: 'radial-gradient(ellipse at center, black 18%, transparent 76%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 18%, transparent 76%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-[390px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto flex h-screen w-full flex-col overflow-hidden bg-ink-900 sm:h-[844px] sm:rounded-[46px] sm:border sm:border-white/10 sm:shadow-shell"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -top-28 left-1/2 h-72 w-[130%] -translate-x-1/2",
    style: {
      background: 'radial-gradient(ellipse at center, rgba(255,92,0,0.16), transparent 68%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute inset-x-0 bottom-0 h-56",
    style: {
      background: 'radial-gradient(ellipse at bottom, rgba(255,92,0,0.07), transparent 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex h-full min-h-0 flex-col"
  }, children)), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 hidden text-center text-[9px] uppercase tracking-[0.34em] text-white/20 sm:block"
  }, "Zhixing \xB7 Study Companion")));
}
function StatusBar({
  time
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex shrink-0 items-center justify-between px-6 pb-1 pt-3 text-[11px] text-white/80"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular font-medium tracking-wide"
  }, time), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-white/70"
  }, /*#__PURE__*/React.createElement(Signal, {
    size: 13,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(Wifi, {
    size: 13,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(BatteryFull, {
    size: 16,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })));
}
function Toast({
  message,
  onClose
}) {
  if (!message) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-4 top-3 z-50 animate-toast-in",
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-2xl border border-accent/25 bg-[#171310]/92 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/25"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 15,
    strokeWidth: 1.8,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] font-medium leading-5 text-white"
  }, message.title), message.detail ? /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[11px] leading-4 text-white/45"
  }, message.detail) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u5173\u95ED\u63D0\u793A",
    className: "mt-0.5 shrink-0 rounded-full p-1 text-white/30 transition-colors hover:text-white/60"
  }, /*#__PURE__*/React.createElement(X, {
    size: 14,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-[2px] bg-accent/20"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block h-full animate-toast-bar bg-accent"
  }))));
}
function IdleGapPage({
  onOpenPages,
  onBookSeat
}) {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const showToast = useCallback(message => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setToast({
      id: Date.now(),
      ...message
    });
    timerRef.current = window.setTimeout(() => setToast(null), 3200);
  }, []);
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-full min-h-0 flex-col"
  }, /*#__PURE__*/React.createElement(Toast, {
    key: toast ? toast.id : 'no-toast',
    message: toast,
    onClose: () => setToast(null)
  }), /*#__PURE__*/React.createElement(StatusBar, {
    time: now
  }), /*#__PURE__*/React.createElement("header", {
    className: "flex shrink-0 items-center justify-between px-6 pb-1 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-[11px] text-white/40"
  }, /*#__PURE__*/React.createElement(CalendarDays, {
    size: 13,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, date)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPages,
    "aria-label": "\u5207\u6362\u9875\u9762",
    className: "grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
  }, /*#__PURE__*/React.createElement(LayoutGrid, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("main", {
    className: "no-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6 pt-6"
  }, /*#__PURE__*/React.createElement("section", {
    className: "animate-rise-in"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] uppercase tracking-[0.34em] text-accent/70"
  }, "Idle Gap"), /*#__PURE__*/React.createElement("h1", {
    className: "mt-2.5 text-[32px] font-semibold leading-none tracking-tight text-white"
  }, "\u7A7A\u7A97\u65F6\u95F4"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-[13px] leading-5 text-white/45"
  }, "\u60A8\u6709", ' ', /*#__PURE__*/React.createElement("span", {
    className: "tabular font-medium text-white/85"
  }, "45 \u5206\u949F"), ' ', "\u7A7A\u7A97\uFF0CAI \u5DF2\u4E3A\u4F60\u5339\u914D\u9644\u8FD1\u5B66\u4E60\u8D44\u6E90")), /*#__PURE__*/React.createElement("section", {
    className: "mt-6 animate-rise-in",
    style: {
      animationDelay: '90ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] uppercase tracking-[0.18em] text-white/35"
  }, "\u73B0\u5728"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-[22px] font-medium leading-none text-white tabular"
  }, now)), /*#__PURE__*/React.createElement("span", {
    className: "rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] text-accent"
  }, "5 \u5206\u949F\u540E\u4E0B\u8BFE")), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] tracking-wide text-accent",
    style: {
      left: `${gap.leftPercent + gap.widthPercent / 2}%`
    }
  }, "\u7A7A\u95F2 ", gap.minutes, " \u5206\u949F \xB7 ", gap.start, "\u2013", gap.end), /*#__PURE__*/React.createElement("div", {
    className: "relative h-[10px] rounded-full bg-white/[0.06]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 w-[37.5%] rounded-full bg-white/[0.12]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 animate-breathe rounded-full bg-gradient-to-r from-accent via-[#FF6A14] to-accent-soft shadow-[0_0_26px_rgba(255,92,0,0.55)]",
    style: {
      left: `${gap.leftPercent}%`,
      width: `${gap.widthPercent}%`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-[5px] h-5 w-[2px] -translate-x-1/2 rounded-full bg-white/55",
    style: {
      left: `${gap.nowPercent}%`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white ring-2 ring-ink-900"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-2.5 h-4 text-[10px] text-white/30 tabular"
  }, ticks.map(tick => /*#__PURE__*/React.createElement("span", {
    key: tick.label,
    className: tick.position === 0 ? 'absolute left-0' : tick.position === 100 ? 'absolute right-0' : 'absolute -translate-x-1/2',
    style: tick.position === 0 || tick.position === 100 ? undefined : {
      left: `${tick.position}%`
    }
  }, tick.label)))))), /*#__PURE__*/React.createElement("section", {
    className: "mt-4 animate-rise-in",
    style: {
      animationDelay: '180ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full",
    style: {
      background: 'radial-gradient(circle, rgba(255,92,0,0.20), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent shadow-[0_0_22px_rgba(255,92,0,0.18)]"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 17,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-[15px] font-medium tracking-tight text-white"
  }, "AI \u667A\u80FD\u63A8\u8350\u89C4\u5212"), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[11px] text-white/35"
  }, "\u57FA\u4E8E\u8BFE\u8868\u7A7A\u6863\u4E0E\u7AE0\u8282\u638C\u63E1\u5EA6\u751F\u6210")), /*#__PURE__*/React.createElement("span", {
    className: "ml-auto shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] tracking-wide text-white/40"
  }, "\u667A\u80FD\u5339\u914D")), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-5 flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-white/55"
  }, /*#__PURE__*/React.createElement(BookOpen, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[17px] font-medium leading-6 tracking-tight text-white"
  }, "\u590D\u4E60", recommendation.course, " \xB7 ", recommendation.chapter), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[11.5px] text-white/40"
  }, recommendation.topic)), /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/70 tabular"
  }, recommendation.minutes, " \u5206\u949F")), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[10px] text-white/35"
  }, /*#__PURE__*/React.createElement("span", null, "\u4E13\u6CE8\u65F6\u6BB5"), /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, recommendation.minutes, " / ", gap.minutes, " min")), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full bg-gradient-to-r from-accent to-accent-soft shadow-[0_0_12px_rgba(255,92,0,0.5)]",
    style: {
      width: `${recommendation.minutes / gap.minutes * 100}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.07] pt-3.5 text-[11px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 text-accent"
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 13,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), recommendation.library), /*#__PURE__*/React.createElement("span", {
    className: "ml-auto inline-flex items-center gap-0.5 text-white/30"
  }, "\u6B65\u884C ", recommendation.walkMinutes, " \u5206\u949F", /*#__PURE__*/React.createElement(ChevronRight, {
    size: 12,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-3 rounded-xl border border-white/[0.06] bg-black/20 px-3 py-2.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10.5px] leading-4 text-white/35"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-accent/80"
  }, "\u51B3\u7B56\u4F9D\u636E"), /*#__PURE__*/React.createElement("span", {
    className: "mx-2 text-white/15"
  }, "/"), "\u8BFE\u8868\u7A7A\u6863 ", gap.minutes, " \u5206\u949F \xB7 \u7B2C 3 \u7AE0\u638C\u63E1\u5EA6", ' ', recommendation.mastered, "% \xB7 \u6B65\u884C", ' ', recommendation.walkMinutes, " \u5206\u949F"))))), /*#__PURE__*/React.createElement("footer", {
    className: "relative z-20 shrink-0 border-t border-white/[0.06] bg-gradient-to-t from-ink-900 via-ink-900/95 to-ink-900/70 px-6 pt-4 backdrop-blur-xl",
    style: {
      paddingBottom: 'max(20px, env(safe-area-inset-bottom))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBookSeat,
    className: "flex h-[54px] flex-1 items-center justify-center gap-2 rounded-full bg-accent text-[14px] font-semibold text-black shadow-glow transition-transform active:scale-[0.985]"
  }, /*#__PURE__*/React.createElement(Wand2, {
    size: 16,
    strokeWidth: 1.8,
    "aria-hidden": "true"
  }), "\u4E00\u952E\u89C4\u5212\u5E76\u8BA2\u5EA7"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => showToast(toastMessages.custom),
    className: "flex h-[54px] w-[112px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] text-[13px] text-white/70 transition-transform active:scale-[0.985] active:bg-white/[0.08]"
  }, /*#__PURE__*/React.createElement(SlidersHorizontal, {
    size: 14,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), "\u81EA\u5B9A\u4E49")), /*#__PURE__*/React.createElement("p", {
    className: "mt-2.5 text-center text-[9px] tracking-wide text-white/25"
  }, "\u5EA7\u4F4D\u7531\u56FE\u4E66\u9986\u5B9E\u65F6\u7CFB\u7EDF\u9501\u5B9A \xB7 \u6F14\u793A\u6570\u636E")));
}
const SEAT_ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const AVAILABLE_KEYS = new Set(['0-9', '1-8', '1-9', '2-9', '3-8', '4-9', '5-9', '6-8', '7-9', '8-8', '9-9', '2-3', '2-4', '3-3', '4-4', '5-5', '6-4', '0-4', '1-6', '2-7', '3-5', '4-2', '5-8', '6-6', '7-4', '8-6', '9-2', '1-1', '3-7', '4-7', '5-2', '7-7', '8-1']);
const PLUG_KEYS = new Set(['0-4', '1-6', '2-7', '3-5', '4-2', '5-8', '6-6', '7-4', '8-6', '9-2']);
const SEATS = SEAT_ROWS.flatMap((row, r) => Array.from({
  length: 10
}, (_, c) => {
  const recommended = r === 0 && c === 1;
  const key = `${r}-${c}`;
  const available = recommended || AVAILABLE_KEYS.has(key);
  return {
    id: recommended ? 'A-12' : `${row}-${c + 1}`,
    key,
    recommended,
    available,
    window: c >= 8,
    plug: PLUG_KEYS.has(key),
    quiet: r >= 2 && r <= 6 && c >= 2 && c <= 5
  };
}));
const SEAT_FILTERS = [{
  id: 'window',
  label: '靠窗',
  icon: Sun
}, {
  id: 'plug',
  label: '插座',
  icon: Plug
}, {
  id: 'quiet',
  label: '安静区',
  icon: VolumeX
}];
const PROTOTYPE_PAGES = [{
  id: 'gap',
  label: '空窗规划',
  en: 'Idle Gap'
}, {
  id: 'seat',
  label: '智能订座',
  en: 'Seat Booking'
}, {
  id: 'tasks',
  label: '任务待办',
  en: 'Study Checklist'
}, {
  id: 'hub',
  label: 'AI 对话舱',
  en: 'Planner Hub'
}, {
  id: 'analytics',
  label: '学情分析',
  en: 'Analytics'
}, {
  id: 'library',
  label: '资料库',
  en: 'Knowledge Base'
}];
function SeatBookingPage({
  onOpenPages
}) {
  const [selectedId, setSelectedId] = useState('A-12');
  const [filters, setFilters] = useState([]);
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const showToast = useCallback(message => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setToast({
      id: Date.now(),
      ...message
    });
    timerRef.current = window.setTimeout(() => setToast(null), 3200);
  }, []);
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);
  const selectedSeat = SEATS.find(seat => seat.id === selectedId) || null;
  const toggleFilter = id => {
    setFilters(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  const toggleSeat = seat => {
    if (!seat.available) return;
    setSelectedId(prev => prev === seat.id ? null : seat.id);
  };
  const matchesFilters = seat => {
    if (filters.length === 0) return true;
    if (filters.includes('window') && !seat.window) return false;
    if (filters.includes('plug') && !seat.plug) return false;
    if (filters.includes('quiet') && !seat.quiet) return false;
    return true;
  };
  const confirmBooking = () => {
    if (!selectedSeat) return;
    showToast({
      title: '预约成功',
      detail: `${selectedSeat.id} 座位 · 图书馆 3楼 · 13:46–14:30`
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-full min-h-0 flex-col"
  }, /*#__PURE__*/React.createElement(Toast, {
    key: toast ? toast.id : 'no-toast',
    message: toast,
    onClose: () => setToast(null)
  }), /*#__PURE__*/React.createElement(StatusBar, {
    time: "13:41"
  }), /*#__PURE__*/React.createElement("main", {
    className: "no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-6"
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-20 -mx-5 border-b border-white/[0.06] bg-ink-900/85 px-5 pb-3 pt-2 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-[9px] uppercase tracking-[0.22em] text-white/30"
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 11,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), "Library \xB7 3F"), /*#__PURE__*/React.createElement("h1", {
    className: "mt-1 text-[24px] font-semibold leading-none tracking-tight text-white"
  }, "\u56FE\u4E66\u9986 3\u697C")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPages,
    "aria-label": "\u5207\u6362\u9875\u9762",
    className: "grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
  }, /*#__PURE__*/React.createElement(LayoutGrid, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("span", {
    className: "grid h-8 w-8 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent"
  }, /*#__PURE__*/React.createElement(Armchair, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "mt-4 animate-rise-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full",
    style: {
      background: 'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-[10px] text-white/40"
  }, /*#__PURE__*/React.createElement(LayoutGrid, {
    size: 12,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), "10 \xD7 10 \u5EA7\u4F4D\u56FE"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 text-[9px] text-white/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-white/[0.15]"
  }), "\u5360\u7528"), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-white/35"
  }), "\u53EF\u7528"), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,92,0,0.8)]"
  }), "\u63A8\u8350"))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-3.5 rounded-[18px] border border-white/[0.06] bg-black/20 p-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-10 gap-[2px]"
  }, SEATS.map(seat => {
    const selected = selectedSeat && selectedSeat.id === seat.id;
    const matched = matchesFilters(seat);
    return /*#__PURE__*/React.createElement("button", {
      key: seat.key,
      type: "button",
      disabled: !seat.available,
      onClick: () => toggleSeat(seat),
      "aria-label": `${seat.id}${seat.recommended ? ' 推荐座位' : seat.available ? ' 可用座位' : ' 已占用'}`,
      "aria-pressed": selected,
      className: "group relative grid h-[22px] place-items-center rounded-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:cursor-default"
    }, selected ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute inset-[8%] rounded-full bg-accent/20 blur-[3px]"
    }), /*#__PURE__*/React.createElement("span", {
      className: "relative h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_12px_rgba(255,92,0,0.9)]"
    })) : seat.recommended ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute inset-[10%] animate-breathe rounded-full border border-accent/45"
    }), /*#__PURE__*/React.createElement("span", {
      className: "relative h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_12px_rgba(255,92,0,0.7)]"
    })) : seat.available ? /*#__PURE__*/React.createElement("span", {
      className: `h-[7px] w-[7px] rounded-full bg-white/35 transition-all group-hover:bg-white/60 ${filters.length && !matched ? 'opacity-25' : ''} ${filters.length && matched ? 'ring-2 ring-accent/40 ring-offset-2 ring-offset-[#0E0E0E]' : ''}`
    }) : /*#__PURE__*/React.createElement("span", {
      className: "h-[6px] w-[6px] rounded-full bg-white/[0.13]"
    }));
  }))), /*#__PURE__*/React.createElement("p", {
    className: "relative mt-3 text-center text-[9px] tracking-wide text-white/25"
  }, "\u70B9\u51FB\u6D45\u8272\u5EA7\u4F4D\u5207\u6362\u9009\u62E9 \xB7 \u6A59\u8272\u4E3A AI \u63A8\u8350"))), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar mt-3.5 flex gap-2 overflow-x-auto pb-1"
  }, SEAT_FILTERS.map(filter => {
    const active = filters.includes(filter.id);
    const FilterIcon = filter.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: filter.id,
      type: "button",
      onClick: () => toggleFilter(filter.id),
      "aria-pressed": active,
      className: `inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[11px] transition-colors ${active ? 'border-accent/45 bg-accent/10 text-accent' : 'border-white/10 bg-white/[0.03] text-white/45'}`
    }, /*#__PURE__*/React.createElement(FilterIcon, {
      size: 13,
      strokeWidth: 1.5,
      "aria-hidden": "true"
    }), filter.label, active ? /*#__PURE__*/React.createElement(Check, {
      size: 10,
      strokeWidth: 2,
      "aria-hidden": "true"
    }) : null);
  })), /*#__PURE__*/React.createElement("section", {
    className: "mt-4 animate-rise-in",
    style: {
      animationDelay: '90ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative overflow-hidden rounded-[26px] border p-5 backdrop-blur-xl transition-colors ${selectedSeat ? 'border-accent/30 bg-accent/[0.055]' : 'border-white/10 bg-white/[0.045]'}`
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full",
    style: {
      background: 'radial-gradient(circle, rgba(255,92,0,0.14), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] uppercase tracking-[0.24em] text-accent/75"
  }, "Seat"), selectedSeat && selectedSeat.recommended ? /*#__PURE__*/React.createElement("span", {
    className: "rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[9px] text-accent"
  }, "AI \u63A8\u8350") : null), /*#__PURE__*/React.createElement("h2", {
    className: "mt-1.5 text-[28px] font-semibold leading-none tracking-tight text-white"
  }, selectedSeat ? selectedSeat.id : '未选择', /*#__PURE__*/React.createElement("span", {
    className: "ml-1.5 text-[11px] font-normal tracking-normal text-white/35"
  }, "\u5EA7\u4F4D")), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-[11px] text-white/35"
  }, selectedSeat ? '图书馆 3 楼 · AI 推荐自习位' : '点击上方浅色座位进行选择')), /*#__PURE__*/React.createElement("span", {
    className: `grid h-12 w-12 place-items-center rounded-2xl border ${selectedSeat ? 'border-accent/25 bg-accent/10 text-accent shadow-[0_0_22px_rgba(255,92,0,0.16)]' : 'border-white/10 bg-black/20 text-white/25'}`
  }, /*#__PURE__*/React.createElement(Armchair, {
    size: 22,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-4 grid grid-cols-4 gap-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2"
  }, /*#__PURE__*/React.createElement(Wifi, {
    size: 14,
    strokeWidth: 1.5,
    className: "text-accent",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-white/55"
  }, "WiFi")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2"
  }, /*#__PURE__*/React.createElement(Plug, {
    size: 14,
    strokeWidth: 1.5,
    className: "text-accent",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-white/55"
  }, "\u63D2\u5EA7")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2"
  }, /*#__PURE__*/React.createElement(Sun, {
    size: 14,
    strokeWidth: 1.5,
    className: "text-white/40",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-white/55"
  }, "\u9760\u7A97")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2"
  }, /*#__PURE__*/React.createElement(VolumeX, {
    size: 14,
    strokeWidth: 1.5,
    className: "text-white/40",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-white/55"
  }, "\u5B89\u9759\u533A"))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-white/35"
  }, "\u9884\u7EA6\u65F6\u6BB5"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-white/70 tabular"
  }, "13:46 \u2013 14:30 ", /*#__PURE__*/React.createElement("span", {
    className: "text-white/30"
  }, "\xB7 45 \u5206\u949F")))))), /*#__PURE__*/React.createElement("footer", {
    className: "relative z-20 shrink-0 border-t border-white/[0.06] bg-gradient-to-t from-ink-900 via-ink-900/95 to-ink-900/70 px-6 pt-4 backdrop-blur-xl",
    style: {
      paddingBottom: 'max(20px, env(safe-area-inset-bottom))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex items-center justify-between text-[10px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white/35"
  }, "\u9884\u8BA1\u5B66\u4E60\u65F6\u957F"), /*#__PURE__*/React.createElement("span", {
    className: "text-white/70 tabular"
  }, "45 \u5206\u949F ", /*#__PURE__*/React.createElement("span", {
    className: "text-white/30"
  }, "\xB7 13:46\u201314:30"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: confirmBooking,
    disabled: !selectedSeat,
    className: `h-[54px] w-full rounded-full text-[14px] font-semibold transition-transform active:scale-[0.985] ${selectedSeat ? 'bg-accent text-black shadow-glow' : 'bg-white/[0.06] text-white/30'}`
  }, "\u786E\u8BA4\u9884\u7EA6")));
}
const TASKS = [{
  id: 1,
  title: '预习高数下册',
  tag: '预习',
  done: false,
  minutes: 45
}, {
  id: 2,
  title: '背诵四级单词',
  tag: '复习',
  done: true,
  minutes: 20
}, {
  id: 3,
  title: '复习微观经济学 · 第 3 章',
  tag: '复习',
  done: false,
  minutes: 25
}, {
  id: 4,
  title: '整理课堂笔记',
  tag: '预习',
  done: true,
  minutes: 40
}, {
  id: 5,
  title: '完成课后习题',
  tag: '练习',
  done: false,
  minutes: 20
}];
function ProgressRing({
  done,
  total
}) {
  const size = 76;
  const stroke = 5;
  const radius = (size - stroke) / 2 - 1;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - (total ? done / total : 0));
  return /*#__PURE__*/React.createElement("div", {
    className: "relative h-[76px] w-[76px] shrink-0",
    role: "img",
    "aria-label": `已完成 ${done} / ${total} 项任务`
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "task-ring-gradient",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF5C00"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF9A55"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: `rotate(-90 ${size / 2} ${size / 2})`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    fill: "none",
    stroke: "rgba(255,255,255,0.08)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    fill: "none",
    stroke: "url(#task-ring-gradient)",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    style: {
      transition: 'stroke-dashoffset 450ms cubic-bezier(.2,.8,.2,1)',
      filter: 'drop-shadow(0 0 6px rgba(255,92,0,0.55))'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex flex-col items-center justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[18px] font-semibold leading-none text-white tabular"
  }, done, "/", total), /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 text-[8px] tracking-wide text-white/30"
  }, "\u5DF2\u5B8C\u6210")));
}
function StudyChecklistPage({
  onOpenPages
}) {
  const [tasks, setTasks] = useState(TASKS);
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const doneCount = tasks.filter(task => task.done).length;
  const percent = tasks.length ? Math.round(doneCount / tasks.length * 100) : 0;
  const showToast = useCallback(message => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setToast({
      id: Date.now(),
      ...message
    });
    timerRef.current = window.setTimeout(() => setToast(null), 3200);
  }, []);
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);
  const toggleTask = id => {
    setTasks(prev => prev.map(task => task.id === id ? {
      ...task,
      done: !task.done
    } : task));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-full min-h-0 flex-col"
  }, /*#__PURE__*/React.createElement(Toast, {
    key: toast ? toast.id : 'no-toast',
    message: toast,
    onClose: () => setToast(null)
  }), /*#__PURE__*/React.createElement(StatusBar, {
    time: "13:41"
  }), /*#__PURE__*/React.createElement("main", {
    className: "no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-28 pt-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 pt-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-[11px] text-white/40"
  }, /*#__PURE__*/React.createElement(CalendarDays, {
    size: 13,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, "11\u670812\u65E5 \u5468\u4E09 \xB7 \u7B2C 12 \u5468")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPages,
    "aria-label": "\u5207\u6362\u9875\u9762",
    className: "grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
  }, /*#__PURE__*/React.createElement(LayoutGrid, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("header", {
    className: "relative animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full",
    style: {
      background: 'radial-gradient(circle, rgba(255,92,0,0.18), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-accent/70"
  }, /*#__PURE__*/React.createElement(ListChecks, {
    size: 11,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), "Study Checklist"), /*#__PURE__*/React.createElement("h1", {
    className: "mt-1.5 text-[26px] font-semibold leading-none tracking-tight text-white"
  }, "\u4EFB\u52A1\u5F85\u529E"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-[11px] text-white/35"
  }, "\u4ECA\u65E5\u6E05\u5355 \xB7 ", doneCount, " \u9879\u5DF2\u5B8C\u6210"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-16 overflow-hidden rounded-full bg-white/[0.07]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block h-full rounded-full bg-gradient-to-r from-accent to-accent-soft",
    style: {
      width: `${percent}%`
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-white/30 tabular"
  }, "\u5B8C\u6210\u7387 ", percent, "%"))), /*#__PURE__*/React.createElement(ProgressRing, {
    done: doneCount,
    total: tasks.length
  }))), /*#__PURE__*/React.createElement("section", {
    className: "mt-4 space-y-2.5"
  }, tasks.map((task, index) => /*#__PURE__*/React.createElement("article", {
    key: task.id,
    className: `group relative flex animate-rise-in items-center gap-3 overflow-hidden rounded-[22px] border border-white/10 p-4 backdrop-blur-xl transition-colors ${task.done ? 'bg-white/[0.025]' : 'bg-white/[0.045]'}`,
    style: {
      animationDelay: `${80 + index * 45}ms`
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => toggleTask(task.id),
    "aria-pressed": task.done,
    "aria-label": `${task.done ? '取消完成' : '标记完成'}：${task.title}`,
    className: "grid h-9 w-9 shrink-0 place-items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
  }, task.done ? /*#__PURE__*/React.createElement("span", {
    className: "grid h-[22px] w-[22px] place-items-center rounded-full bg-accent text-black shadow-[0_0_14px_rgba(255,92,0,0.45)]"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 13,
    strokeWidth: 2.4,
    "aria-hidden": "true"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "h-[22px] w-[22px] rounded-full border border-white/30 transition-colors group-hover:border-accent/70"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: `truncate text-[14px] leading-5 transition-colors ${task.done ? 'text-white/30 line-through' : 'text-white/90'}`
  }, task.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: `rounded-full border px-2 py-0.5 text-[9px] transition-opacity ${task.tag === '预习' ? 'border-accent/25 bg-accent/10 text-accent' : 'border-white/10 bg-white/[0.05] text-white/45'} ${task.done ? 'opacity-50' : ''}`
  }, task.tag))), /*#__PURE__*/React.createElement("span", {
    className: `inline-flex shrink-0 items-center gap-1 text-[10px] tabular transition-colors ${task.done ? 'text-white/20' : 'text-white/45'}`
  }, /*#__PURE__*/React.createElement(Clock3, {
    size: 12,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }), task.minutes, " \u5206\u949F"))))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => showToast({
      title: '新建任务',
      detail: '原型演示 · 可接入任务编辑器'
    }),
    "aria-label": "\u65B0\u5EFA\u4EFB\u52A1",
    className: "absolute bottom-6 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-accent text-black shadow-[0_10px_30px_rgba(255,92,0,0.45)] transition-transform active:scale-95"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 24,
    strokeWidth: 2,
    "aria-hidden": "true"
  })));
}
const HUB_TAGS = ['时空调度已就绪', 'RAG 伴学已就绪', '座位代理已就绪'];
const INITIAL_MESSAGES = [{
  id: 'm1',
  role: 'user',
  text: '帮我安排今天下午的空窗，并订 A-12 座位。'
}, {
  id: 'm2',
  role: 'ai',
  text: '已根据第 12 周课表、RAG 笔记与图书馆实时座位，生成一条 45 分钟空窗路径。A-12 已锁定，确认后即可开始。',
  plan: {
    title: '今日空窗学习计划',
    time: '13:46 – 14:30 · 45 分钟',
    items: [{
      title: '复习微观经济学 · 第 3 章',
      meta: '25 分钟 · 图书馆 3F · A-12'
    }, {
      title: '完成课后习题',
      meta: '20 分钟 · 座位原地完成'
    }]
  },
  thinking: '读取课表：13:46–14:30 无课程，空窗 45 分钟。\nRAG 检索：微观经济学第 3 章掌握度 62%，边际效用是薄弱点。\n座位校验：图书馆 3F · A-12 可用，步行 6 分钟。\n路径生成：25 分钟复习 + 20 分钟习题，已同步任务待办。'
}];
function PlannerHubPage({
  onOpenPages
}) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [draft, setDraft] = useState('');
  const [openThinking, setOpenThinking] = useState(null);
  const [toast, setToast] = useState(null);
  const scrollRef = useRef(null);
  const timerRef = useRef(null);
  const showToast = useCallback(message => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setToast({
      id: Date.now(),
      ...message
    });
    timerRef.current = window.setTimeout(() => setToast(null), 3200);
  }, []);
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);
  useEffect(() => {
    const container = scrollRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages]);
  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages(prev => [...prev, {
      id: `m-${Date.now()}`,
      role: 'user',
      text
    }]);
    setDraft('');
  };
  const toggleThinking = id => {
    setOpenThinking(prev => prev === id ? null : id);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-full min-h-0 flex-col"
  }, /*#__PURE__*/React.createElement(Toast, {
    key: toast ? toast.id : 'no-toast',
    message: toast,
    onClose: () => setToast(null)
  }), /*#__PURE__*/React.createElement(StatusBar, {
    time: "13:41"
  }), /*#__PURE__*/React.createElement("header", {
    className: "shrink-0 px-5 pb-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full",
    style: {
      background: 'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative grid h-10 w-10 shrink-0 place-items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 animate-breathe rounded-full border border-accent/35 shadow-[0_0_18px_rgba(255,92,0,0.22)]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-[6px] rounded-full border border-accent/25"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,92,0,0.9)]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[8.5px] uppercase tracking-[0.26em] text-accent/60"
  }, "AI Companion \xB7 Agents \u534F\u540C\u4E2D"), /*#__PURE__*/React.createElement("h1", {
    className: "mt-1 text-[24px] font-semibold leading-none tracking-tight text-white"
  }, "Planner Hub")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPages,
    "aria-label": "\u5207\u6362\u9875\u9762",
    className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
  }, /*#__PURE__*/React.createElement(LayoutGrid, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar relative mt-3.5 flex gap-2 overflow-x-auto pb-0.5"
  }, HUB_TAGS.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    className: "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-1 text-[9px] text-accent/80 shadow-[0_0_12px_rgba(255,92,0,0.06)]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 animate-breathe rounded-full bg-accent"
  }), tag))))), /*#__PURE__*/React.createElement("main", {
    ref: scrollRef,
    className: "no-scrollbar min-h-0 flex-1 space-y-4 overflow-y-auto px-5 pb-4"
  }, messages.map(message => message.role === 'user' ? /*#__PURE__*/React.createElement("div", {
    key: message.id,
    className: "flex justify-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[82%] rounded-[20px] rounded-br-md border border-white/[0.06] bg-[#1C1C1E] px-4 py-3 text-[13px] leading-6 text-white/85"
  }, message.text)) : /*#__PURE__*/React.createElement("div", {
    key: message.id,
    className: "flex items-start gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative mt-5 grid h-6 w-6 shrink-0 place-items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 rounded-full border border-accent/30 bg-accent/10"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-[5px] rounded-full border border-accent/25"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 max-w-[88%] flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1.5 text-[8.5px] uppercase tracking-[0.18em] text-accent/55"
  }, "Planner \xB7 AI"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-[20px] rounded-tl-md border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[13px] leading-6 text-white/80"
  }, message.text), message.plan ? /*#__PURE__*/React.createElement("div", {
    className: "mt-3.5 overflow-hidden rounded-2xl border border-accent/30 bg-accent/[0.055] p-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[8.5px] uppercase tracking-[0.2em] text-accent/75"
  }, "Study Plan"), /*#__PURE__*/React.createElement("span", {
    className: "rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[8.5px] text-accent"
  }, "\u5DF2\u751F\u6210")), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[14px] font-medium text-white"
  }, message.plan.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[10px] text-white/40 tabular"
  }, message.plan.time), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-2 border-t border-white/[0.07] pt-3"
  }, message.plan.items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.title,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] leading-4 text-white/80"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[9px] text-white/35"
  }, item.meta)), /*#__PURE__*/React.createElement(Clock3, {
    size: 11,
    strokeWidth: 1.5,
    className: "mt-0.5 shrink-0 text-white/25",
    "aria-hidden": "true"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-1 text-[9px] text-accent/70"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 10,
    strokeWidth: 2,
    "aria-hidden": "true"
  }), "\u5DF2\u540C\u6B65\u81F3\u4EFB\u52A1\u5F85\u529E")) : null), message.thinking ? /*#__PURE__*/React.createElement("div", {
    className: `mt-2 overflow-hidden rounded-xl border transition-colors ${openThinking === message.id ? 'border-accent/35 bg-accent/[0.035]' : 'border-accent/20'}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => toggleThinking(message.id),
    "aria-expanded": openThinking === message.id,
    className: "flex w-full items-center gap-2 px-3 py-2.5 text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 shrink-0 animate-breathe rounded-full bg-accent"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] tracking-wide text-accent/80"
  }, "Thinking Process..."), /*#__PURE__*/React.createElement(ChevronDown, {
    size: 12,
    strokeWidth: 1.5,
    "aria-hidden": "true",
    className: `ml-auto shrink-0 text-accent/50 transition-transform duration-300 ${openThinking === message.id ? 'rotate-180' : ''}`
  })), /*#__PURE__*/React.createElement("div", {
    className: `grid transition-all duration-300 ${openThinking === message.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("p", {
    className: "whitespace-pre-line px-3 pb-3 text-[10px] leading-5 text-white/30"
  }, message.thinking)))) : null)))), /*#__PURE__*/React.createElement("div", {
    className: "relative z-20 shrink-0 px-5 pt-2",
    style: {
      paddingBottom: 'max(16px, env(safe-area-inset-bottom))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rounded-[26px] border border-white/10 bg-white/[0.06] p-1.5 pl-2 backdrop-blur-xl transition-colors focus-within:border-accent/35"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => showToast({
      title: '添加内容',
      detail: '原型演示 · 可上传资料或插入任务'
    }),
    "aria-label": "\u6DFB\u52A0\u5185\u5BB9",
    className: "grid h-10 w-10 shrink-0 place-items-center rounded-full text-white/45 transition-colors hover:bg-white/[0.06] active:bg-white/10"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: draft,
    onChange: event => setDraft(event.target.value),
    onKeyDown: event => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    },
    placeholder: "\u8F93\u5165\u5B66\u4E60\u5B89\u6392\u2026",
    "aria-label": "\u8F93\u5165\u5B66\u4E60\u5B89\u6392",
    className: "min-w-0 flex-1 bg-transparent py-2 text-[13px] text-white outline-none placeholder:text-white/25"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: sendMessage,
    disabled: !draft.trim(),
    "aria-label": "\u53D1\u9001",
    className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-black shadow-[0_0_18px_rgba(255,92,0,0.45)] transition-all active:scale-95 disabled:bg-white/[0.06] disabled:text-white/25 disabled:shadow-none"
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    size: 18,
    strokeWidth: 2,
    "aria-hidden": "true"
  })))));
}
const RADAR_DATA = [{
  subject: '专注',
  value: 82
}, {
  subject: '自律',
  value: 76
}, {
  subject: '进度',
  value: 68
}, {
  subject: '理解',
  value: 74
}, {
  subject: '记忆',
  value: 61
}, {
  subject: '节奏',
  value: 88
}];
const WEEKLY_DATA = [{
  day: '一',
  hours: 1.0
}, {
  day: '二',
  hours: 1.8
}, {
  day: '三',
  hours: 0.7
}, {
  day: '四',
  hours: 2.2
}, {
  day: '五',
  hours: 1.6
}, {
  day: '六',
  hours: 2.9
}, {
  day: '日',
  hours: 1.8
}];
const ANALYTICS_STATS = [{
  label: '本周总时长',
  value: '12h',
  note: '+2.4h'
}, {
  label: '本周完成率',
  value: '85%',
  note: '+6%'
}, {
  label: '连续学习',
  value: '7天',
  note: '保持中'
}];
function AnalyticsTooltip({
  active,
  payload,
  label
}) {
  if (!active || !payload || !payload.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-accent/25 bg-[#171310]/95 px-2.5 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[8.5px] text-white/35"
  }, "\u5468", label), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[11px] text-accent tabular"
  }, payload[0].value, " \u5C0F\u65F6"));
}
function AnalyticsPage({
  onOpenPages
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-full min-h-0 flex-col"
  }, /*#__PURE__*/React.createElement(StatusBar, {
    time: "13:41"
  }), /*#__PURE__*/React.createElement("main", {
    className: "no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-6 pt-2"
  }, /*#__PURE__*/React.createElement("header", {
    className: "relative animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full",
    style: {
      background: 'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[9px] uppercase tracking-[0.24em] text-accent/65"
  }, "Learning Analytics"), /*#__PURE__*/React.createElement("h1", {
    className: "mt-1 text-[26px] font-semibold leading-none tracking-tight text-white"
  }, "\u5B66\u60C5\u6982\u89C8"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-[10px] text-white/35"
  }, "\u672C\u5468 \xB7 11.06 \u2013 11.12 \xB7 \u6548\u7387\u63D0\u5347", ' ', /*#__PURE__*/React.createElement("span", {
    className: "text-accent"
  }, "18%"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPages,
    "aria-label": "\u5207\u6362\u9875\u9762",
    className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
  }, /*#__PURE__*/React.createElement(LayoutGrid, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "mt-4 flex gap-2.5"
  }, ANALYTICS_STATS.map((stat, index) => /*#__PURE__*/React.createElement("div", {
    key: stat.label,
    className: "relative flex-1 animate-rise-in overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-xl",
    style: {
      animationDelay: `${60 + index * 40}ms`
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[9px] text-white/35"
  }, stat.label), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[22px] font-semibold leading-none text-white tabular"
  }, stat.value), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[8.5px] text-accent/75"
  }, stat.note)))), /*#__PURE__*/React.createElement("section", {
    className: "relative mt-3 animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl",
    style: {
      animationDelay: '150ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-[13px] font-medium text-white"
  }, "\u591A\u7EF4\u753B\u50CF"), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-white/30"
  }, "\u8FD1 7 \u5929")), /*#__PURE__*/React.createElement("div", {
    className: "chart-glow mt-2 h-[190px] w-full"
  }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement(RadarChart, {
    data: RADAR_DATA,
    outerRadius: "68%",
    margin: {
      top: 8,
      right: 12,
      bottom: 8,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(PolarGrid, {
    stroke: "rgba(255,255,255,0.07)"
  }), /*#__PURE__*/React.createElement(PolarAngleAxis, {
    dataKey: "subject",
    tick: {
      fill: 'rgba(255,255,255,0.42)',
      fontSize: 9
    }
  }), /*#__PURE__*/React.createElement(PolarRadiusAxis, {
    domain: [0, 100],
    tick: false,
    axisLine: false
  }), /*#__PURE__*/React.createElement(Radar, {
    dataKey: "value",
    stroke: "#FF5C00",
    strokeWidth: 1.8,
    fill: "#FF5C00",
    fillOpacity: 0.14,
    dot: {
      r: 2,
      fill: '#FF5C00',
      strokeWidth: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-center justify-between text-[9px] text-white/30"
  }, /*#__PURE__*/React.createElement("span", null, "\u7EFC\u5408\u8BC4\u5206", ' ', /*#__PURE__*/React.createElement("span", {
    className: "ml-1 text-[13px] font-semibold text-accent tabular"
  }, "76")), /*#__PURE__*/React.createElement("span", null, "\u8F83\u4E0A\u5468 ", /*#__PURE__*/React.createElement("span", {
    className: "text-accent"
  }, "+8")))), /*#__PURE__*/React.createElement("section", {
    className: "relative mt-3 animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl",
    style: {
      animationDelay: '210ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-[13px] font-medium text-white"
  }, "\u5B66\u4E60\u8D8B\u52BF"), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-white/30"
  }, "\u672C\u5468 12h")), /*#__PURE__*/React.createElement("div", {
    className: "chart-glow mt-3 h-[170px] w-full"
  }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement(AreaChart, {
    data: WEEKLY_DATA,
    margin: {
      top: 6,
      right: 4,
      left: -24,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "studyArea",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF5C00",
    stopOpacity: 0.38
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF5C00",
    stopOpacity: 0
  }))), /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "2 6",
    vertical: false,
    stroke: "rgba(255,255,255,0.06)"
  }), /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "day",
    axisLine: false,
    tickLine: false,
    tick: {
      fill: 'rgba(255,255,255,0.3)',
      fontSize: 8
    },
    dy: 4
  }), /*#__PURE__*/React.createElement(YAxis, {
    axisLine: false,
    tickLine: false,
    tick: {
      fill: 'rgba(255,255,255,0.25)',
      fontSize: 8
    },
    tickFormatter: value => `${value}h`,
    width: 30
  }), /*#__PURE__*/React.createElement(Tooltip, {
    cursor: {
      stroke: 'rgba(255,92,0,0.35)'
    },
    content: /*#__PURE__*/React.createElement(AnalyticsTooltip, null)
  }), /*#__PURE__*/React.createElement(Area, {
    type: "monotone",
    dataKey: "hours",
    stroke: "#FF5C00",
    strokeWidth: 2,
    fill: "url(#studyArea)",
    dot: {
      r: 2.5,
      fill: '#FF5C00',
      stroke: '#0A0A0A',
      strokeWidth: 1.5
    },
    activeDot: {
      r: 4,
      fill: '#FF5C00',
      stroke: '#0A0A0A',
      strokeWidth: 2
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "relative mt-3 animate-rise-in overflow-hidden rounded-[24px] border border-accent/40 bg-accent/[0.05] p-4 shadow-[0_0_30px_rgba(255,92,0,0.16)]",
    style: {
      animationDelay: '270ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] uppercase tracking-[0.22em] text-accent/75"
  }, "AI \u9884\u6D4B"), /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 animate-breathe rounded-full bg-accent"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[12px] leading-5 text-white/85"
  }, "\u4E0B\u5468\u9AD8\u6570\u53EF\u80FD\u9700\u8981\u589E\u52A0\u590D\u4E60\u65F6\u95F4"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-[10px] leading-4 text-white/40"
  }, "\u5EFA\u8BAE\u5728\u5468\u4E8C\u3001\u5468\u56DB\u5404\u589E\u52A0 30 \u5206\u949F\uFF0C\u4F18\u5148\u5904\u7406\u6781\u9650\u4E0E\u5BFC\u6570\u9519\u9898\u3002"))))));
}
const LIBRARY_FILTERS = ['全部', '课堂笔记', '课件PPT', '速记备忘'];
const LIBRARY_FILES = [{
  id: 'f1',
  name: '微观经济学_第3章.pptx',
  ext: 'PPTX',
  category: '课件PPT',
  time: '昨天 14:30',
  size: '8.6 MB',
  icon: 'ppt',
  recent: true
}, {
  id: 'f2',
  name: '高数课堂速记.mp3',
  ext: 'MP3',
  category: '速记备忘',
  time: '今天 09:15',
  size: '12.4 MB',
  icon: 'audio'
}, {
  id: 'f3',
  name: '宏观经济学 课堂笔记.pdf',
  ext: 'PDF',
  category: '课堂笔记',
  time: '11月10日',
  size: '2.1 MB',
  icon: 'pdf'
}, {
  id: 'f4',
  name: '英语听力原文.png',
  ext: 'PNG',
  category: '课堂笔记',
  time: '11月08日',
  size: '1.8 MB',
  icon: 'image'
}, {
  id: 'f5',
  name: '作业要求_课程设计.pdf',
  ext: 'PDF',
  category: '课堂笔记',
  time: '11月06日',
  size: '640 KB',
  icon: 'pdf'
}];
const LIBRARY_ICONS = {
  ppt: Presentation,
  audio: Mic,
  pdf: FileText,
  image: ImageIcon
};
function LibraryPage({
  onOpenPages
}) {
  const [filter, setFilter] = useState('全部');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const showToast = useCallback(message => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setToast({
      id: Date.now(),
      ...message
    });
    timerRef.current = window.setTimeout(() => setToast(null), 3200);
  }, []);
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-full min-h-0 flex-col"
  }, /*#__PURE__*/React.createElement(Toast, {
    key: toast ? toast.id : 'no-toast',
    message: toast,
    onClose: () => setToast(null)
  }), /*#__PURE__*/React.createElement(StatusBar, {
    time: "13:41"
  }), /*#__PURE__*/React.createElement("main", {
    className: "no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-28 pt-2"
  }, /*#__PURE__*/React.createElement("header", {
    className: "relative animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full",
    style: {
      background: 'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[9px] uppercase tracking-[0.24em] text-accent/65"
  }, "Knowledge Base"), /*#__PURE__*/React.createElement("h1", {
    className: "mt-1 text-[24px] font-semibold leading-none tracking-tight text-white"
  }, "\u4E2A\u4EBA\u77E5\u8BC6\u5E93"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1.5 text-[10px] text-white/35"
  }, "5 \u4EFD\u8D44\u6599 \xB7 RAG \u5DF2\u7D22\u5F15")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPages,
    "aria-label": "\u5207\u6362\u9875\u9762",
    className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
  }, /*#__PURE__*/React.createElement(LayoutGrid, {
    size: 15,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-3.5 flex items-center gap-2 rounded-2xl border border-accent/25 bg-black/20 px-3.5 py-3 shadow-[0_0_18px_rgba(255,92,0,0.10)] transition-all focus-within:border-accent/45 focus-within:shadow-[0_0_24px_rgba(255,92,0,0.16)]"
  }, /*#__PURE__*/React.createElement(Search, {
    size: 15,
    strokeWidth: 1.5,
    className: "shrink-0 text-accent",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: query,
    onChange: event => setQuery(event.target.value),
    placeholder: "\u667A\u80FD\u68C0\u7D22\u8BFE\u7A0B\u8D44\u6599\u2026",
    "aria-label": "\u667A\u80FD\u68C0\u7D22\u8BFE\u7A0B\u8D44\u6599",
    className: "min-w-0 flex-1 bg-transparent text-[12px] text-white outline-none placeholder:text-white/30"
  }), /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[8px] tracking-wide text-accent"
  }, "RAG"))), /*#__PURE__*/React.createElement("div", {
    className: "no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1"
  }, LIBRARY_FILTERS.map(item => {
    const active = filter === item;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      type: "button",
      onClick: () => setFilter(item),
      "aria-pressed": active,
      className: `shrink-0 rounded-full px-3.5 py-2 text-[11px] transition-colors ${active ? 'bg-accent font-medium text-black shadow-[0_0_16px_rgba(255,92,0,0.25)]' : 'border border-white/10 bg-white/[0.03] text-white/45'}`
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-3 flex items-start gap-2.5 overflow-hidden rounded-2xl border border-accent/20 bg-[#141210]/85 px-3.5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 13,
    strokeWidth: 1.5,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] leading-4 text-white/65"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-accent"
  }, "AI \u53D1\u73B0\uFF1A"), "\u60A8\u6709\u4E00\u4EFD\u672A\u5F52\u6863\u7684\u7B14\u8BB0\u4E0E\u4ECA\u65E5\u8BFE\u7A0B\u76F8\u5173"), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-[9px] text-white/30"
  }, "\u9AD8\u6570\u8BFE\u5802\u901F\u8BB0 \xB7 \u5EFA\u8BAE\u5F52\u6863\u81F3\u300C\u8BFE\u5802\u7B14\u8BB0\u300D")), /*#__PURE__*/React.createElement(ChevronRight, {
    size: 13,
    strokeWidth: 1.5,
    className: "mt-1 shrink-0 text-accent/45",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("section", {
    className: "mt-3 space-y-2.5"
  }, LIBRARY_FILES.map((file, index) => {
    const FileIcon = LIBRARY_ICONS[file.icon];
    return /*#__PURE__*/React.createElement("article", {
      key: file.id,
      className: `group relative flex animate-rise-in items-start gap-3 overflow-hidden rounded-[22px] border p-4 backdrop-blur-xl ${file.recent ? 'border-accent/40 bg-accent/[0.055] shadow-[0_0_24px_rgba(255,92,0,0.14)]' : 'border-white/10 bg-white/[0.04]'}`,
      style: {
        animationDelay: `${80 + index * 45}ms`
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: `grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${file.recent ? 'border-accent/30 bg-accent/10 text-white/90' : 'border-white/10 bg-white/[0.05] text-white/80'}`
    }, /*#__PURE__*/React.createElement(FileIcon, {
      size: 18,
      strokeWidth: 1.5,
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "truncate text-[13px] leading-5 text-white/85"
    }, file.name), file.recent ? /*#__PURE__*/React.createElement("span", {
      className: "shrink-0 rounded-full border border-accent/25 bg-accent/10 px-1.5 py-0.5 text-[8px] text-accent"
    }, "\u6700\u8FD1") : null), /*#__PURE__*/React.createElement("div", {
      className: "mt-1.5 flex items-center gap-1.5 text-[9px] text-white/30 tabular"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[8px] text-white/35"
    }, file.ext), /*#__PURE__*/React.createElement("span", null, file.time), /*#__PURE__*/React.createElement("span", {
      className: "h-0.5 w-0.5 rounded-full bg-white/20"
    }), /*#__PURE__*/React.createElement("span", null, file.size))), /*#__PURE__*/React.createElement(ChevronRight, {
      size: 14,
      strokeWidth: 1.5,
      className: "mt-3 shrink-0 text-white/20 transition-transform group-hover:translate-x-0.5",
      "aria-hidden": "true"
    }));
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => showToast({
      title: '支持上传图片、文档或直接语音速记',
      detail: '原型演示 · 上传入口未接入'
    }),
    "aria-label": "\u4E0A\u4F20\u8D44\u6599",
    className: "absolute bottom-6 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-accent text-black shadow-[0_10px_30px_rgba(255,92,0,0.45)] transition-transform active:scale-95"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 24,
    strokeWidth: 2,
    "aria-hidden": "true"
  })));
}
function PageSwitcher({
  open,
  current,
  onSelect,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-40",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute right-5 top-[88px] w-[216px] animate-toast-in rounded-2xl border border-white/10 bg-[#141110]/95 p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.75)] backdrop-blur-2xl",
    onClick: event => event.stopPropagation()
  }, /*#__PURE__*/React.createElement("p", {
    className: "px-3 pb-1 pt-2 text-[8px] uppercase tracking-[0.28em] text-white/25"
  }, "Prototype Pages"), PROTOTYPE_PAGES.map(page => {
    const active = page.id === current;
    return /*#__PURE__*/React.createElement("button", {
      key: page.id,
      type: "button",
      onClick: () => {
        onSelect(page.id);
        onClose();
      },
      className: `flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-colors ${active ? 'bg-accent/10 text-white' : 'text-white/55 hover:bg-white/[0.05]'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `h-1.5 w-1.5 rounded-full ${active ? 'bg-accent shadow-[0_0_8px_rgba(255,92,0,0.8)]' : 'bg-white/20'}`
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[12px]"
    }, page.label), /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-[8px] tracking-wide text-white/25"
    }, page.en));
  })));
}
const PAGE_IDS = ['gap', 'seat', 'tasks', 'hub', 'analytics', 'library'];
function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return PAGE_IDS.includes(hash) ? hash : 'gap';
  });
  const [pagesOpen, setPagesOpen] = useState(false);
  const openPages = () => setPagesOpen(open => !open);
  return /*#__PURE__*/React.createElement(PhoneShell, null, page === 'gap' ? /*#__PURE__*/React.createElement(IdleGapPage, {
    onOpenPages: openPages,
    onBookSeat: () => setPage('seat')
  }) : page === 'seat' ? /*#__PURE__*/React.createElement(SeatBookingPage, {
    onOpenPages: openPages
  }) : page === 'tasks' ? /*#__PURE__*/React.createElement(StudyChecklistPage, {
    onOpenPages: openPages
  }) : page === 'hub' ? /*#__PURE__*/React.createElement(PlannerHubPage, {
    onOpenPages: openPages
  }) : page === 'analytics' ? /*#__PURE__*/React.createElement(AnalyticsPage, {
    onOpenPages: openPages
  }) : /*#__PURE__*/React.createElement(LibraryPage, {
    onOpenPages: openPages
  }), /*#__PURE__*/React.createElement(PageSwitcher, {
    open: pagesOpen,
    current: page,
    onSelect: setPage,
    onClose: () => setPagesOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
