import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MODELS } from "./models-B69ILCyc.mjs";
import { q as cn, c as createSsrRpc } from "./router-CTR15R5u.mjs";
import { c as createServerFn } from "./server-DeJaANHj.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-adVIVGDd.mjs";
import { R as Root2, T as Trigger, P as Portal, C as Content2 } from "../_libs/radix-ui__react-popover.mjs";
import { t as CalendarDays, h as CircleCheck, u as ChevronLeft, v as ChevronRight, w as ChevronDown } from "../_libs/lucide-react.mjs";
import { H as th } from "../_libs/date-fns.mjs";
import { g as getDefaultClassNames, D as DayPicker } from "../_libs/react-day-picker.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
const testDriveBookingSchema = objectType({
  name: stringType().trim().min(1),
  phone: stringType().trim().min(1),
  email: stringType().trim().email().or(literalType("")),
  model: stringType().trim().min(1),
  date: stringType().trim().optional(),
  message: stringType().trim().optional()
});
const submitTestDriveBooking = createServerFn({
  method: "POST"
}).inputValidator(testDriveBookingSchema).handler(createSsrRpc("725859a2360a125a7951e9f4bb46f7d2c3edff320b51fac80d87b4cdcd493c2a"));
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
const Popover = Root2;
const PopoverTrigger = Trigger;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content2.displayName;
function getInitialForm(defaultModel) {
  return {
    name: "",
    phone: "",
    email: "",
    model: defaultModel ?? MODELS[0].name,
    date: "",
    message: ""
  };
}
function formatThaiDisplayDate(date) {
  return new Intl.DateTimeFormat("th-TH-u-ca-buddhist", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}
function parseIsoDate(value) {
  if (!value) {
    return void 0;
  }
  const [yearText, monthText, dayText] = value.split("-");
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  if (!year || !month || !day) {
    return void 0;
  }
  return new Date(year, month - 1, day);
}
function toIsoDate(value) {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function TestDriveForm({ defaultModel }) {
  const [isSuccessOpen, setIsSuccessOpen] = reactExports.useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(() => getInitialForm(defaultModel));
  const selectedDate = reactExports.useMemo(() => parseIsoDate(form.date), [form.date]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: async (e) => {
          e.preventDefault();
          if (!form.name || !form.phone) return;
          setSubmitError(null);
          setIsSubmitting(true);
          try {
            await submitTestDriveBooking({ data: form });
            setForm(getInitialForm(defaultModel));
            setIsSuccessOpen(true);
          } catch (error) {
            setSubmitError(error instanceof Error ? error.message : "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
          } finally {
            setIsSubmitting(false);
          }
        },
        className: "glass rounded-2xl p-6 sm:p-8 space-y-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "ชื่อ-นามสกุล *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { suppressHydrationWarning: true, required: true, maxLength: 80, value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), className: inputCls }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "เบอร์โทรศัพท์ *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { suppressHydrationWarning: true, required: true, type: "tel", maxLength: 20, value: form.phone, onChange: (e) => setForm({ ...form, phone: e.target.value }), className: inputCls }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "อีเมล", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { suppressHydrationWarning: true, type: "email", maxLength: 120, value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), className: inputCls }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "รุ่นที่สนใจ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { suppressHydrationWarning: true, value: form.model, onChange: (e) => setForm({ ...form, model: e.target.value }), className: inputCls, children: MODELS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m.name, children: m.name }, m.slug)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "วันที่นัดหมาย", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: isDatePickerOpen, onOpenChange: setIsDatePickerOpen, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  suppressHydrationWarning: true,
                  type: "button",
                  variant: "outline",
                  className: cn(
                    "w-full justify-between rounded-lg border-border bg-background/60 px-3 py-2.5 text-sm font-normal hover:bg-background/70",
                    !selectedDate && "text-muted-foreground"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedDate ? formatThaiDisplayDate(selectedDate) : "เลือกวันที่นัดหมาย" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 opacity-70" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Calendar,
                {
                  mode: "single",
                  locale: th,
                  selected: selectedDate,
                  onSelect: (date) => {
                    setForm({ ...form, date: date ? toIsoDate(date) : "" });
                    setIsDatePickerOpen(false);
                  },
                  formatters: {
                    formatCaption: (date) => new Intl.DateTimeFormat("th-TH-u-ca-buddhist", {
                      month: "long",
                      year: "numeric"
                    }).format(date),
                    formatWeekdayName: (date) => new Intl.DateTimeFormat("th-TH", { weekday: "short" }).format(date)
                  },
                  autoFocus: true
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "ข้อความเพิ่มเติม", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { suppressHydrationWarning: true, maxLength: 500, rows: 3, value: form.message, onChange: (e) => setForm({ ...form, message: e.target.value }), className: inputCls }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              suppressHydrationWarning: true,
              type: "submit",
              disabled: isSubmitting,
              className: "w-full rounded-full bg-red-600 py-3 text-base font-semibold text-white hover:bg-red-700 transition disabled:cursor-not-allowed disabled:opacity-70",
              children: isSubmitting ? "กำลังส่งข้อมูล..." : "ยืนยันนัดทดลองขับฟรี"
            }
          ),
          submitError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400 text-center", children: submitError }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "เราเก็บข้อมูลของท่านเพื่อการติดต่อกลับเท่านั้น" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isSuccessOpen, onOpenChange: setIsSuccessOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-md border-border bg-background/95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-9 w-9" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl", children: "ได้รับข้อมูลแล้ว" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-sm leading-relaxed text-muted-foreground", children: "ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง เพื่อยืนยันนัดทดลองขับ" })
    ] }) }) })
  ] });
}
const inputCls = "w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50";
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: label }),
    children
  ] });
}
export {
  TestDriveForm as T
};
