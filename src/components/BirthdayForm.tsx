import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

const daysInMonth = (y: number, m: number) =>
  y && m ? new Date(y, m, 0).getDate() : 31;

const BirthdayForm = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const y = Number(year), m = Number(month), d = Number(day);
  const dayCount = useMemo(() => daysInMonth(y, m), [y, m]);
  const days = useMemo(() => Array.from({ length: dayCount }, (_, i) => i + 1), [dayCount]);

  // Reset day if it's no longer valid for the chosen month
  useEffect(() => {
    if (d && d > dayCount) setDay("");
  }, [dayCount, d]);

  const valid = y >= 1900 && y <= CURRENT_YEAR && m >= 1 && m <= 12 && d >= 1 && d <= dayCount;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid) {
      setError("请选择完整的出生日期");
      return;
    }
    setError(null);
    navigate(`/result?y=${y}&m=${m}&d=${d}`);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <PickerField label="年">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="h-14 rounded-none border-x-0 border-t-0 border-b-2 border-ink/20 bg-transparent px-2 font-display text-xl text-ink shadow-none focus:ring-0 focus-visible:ring-0 data-[placeholder]:text-ink/30">
              <SelectValue placeholder="YYYY" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {YEARS.map((v) => (
                <SelectItem key={v} value={String(v)}>{v}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PickerField>
        <PickerField label="月">
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="h-14 rounded-none border-x-0 border-t-0 border-b-2 border-ink/20 bg-transparent px-2 font-display text-xl text-ink shadow-none focus:ring-0 focus-visible:ring-0 data-[placeholder]:text-ink/30">
              <SelectValue placeholder="MM" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {MONTHS.map((v) => (
                <SelectItem key={v} value={String(v)}>{String(v).padStart(2, "0")}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PickerField>
        <PickerField label="日">
          <Select value={day} onValueChange={setDay} disabled={!year || !month}>
            <SelectTrigger className="h-14 rounded-none border-x-0 border-t-0 border-b-2 border-ink/20 bg-transparent px-2 font-display text-xl text-ink shadow-none focus:ring-0 focus-visible:ring-0 data-[placeholder]:text-ink/30 disabled:opacity-40">
              <SelectValue placeholder="DD" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {days.map((v) => (
                <SelectItem key={v} value={String(v)}>{String(v).padStart(2, "0")}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PickerField>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button
        type="submit"
        disabled={!valid}
        className="h-14 w-full rounded-none bg-ink text-base font-light tracking-[0.3em] text-cream hover:bg-brand disabled:opacity-40"
      >
        揭 示 我 的 数 字
      </Button>
      <p className="text-center text-xs text-muted-foreground">无需注册 · 数据不会被保存</p>
    </form>
  );
};

const PickerField = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="block">
    <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
    {children}
  </div>
);

export default BirthdayForm;