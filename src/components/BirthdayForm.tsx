import { FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BirthdayForm = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState<string | null>(null);

  const valid = useMemo(() => {
    const y = Number(year), m = Number(month), d = Number(day);
    if (!y || !m || !d) return false;
    if (y < 1900 || y > 2099) return false;
    if (m < 1 || m > 12) return false;
    const last = new Date(y, m, 0).getDate();
    if (d < 1 || d > last) return false;
    return true;
  }, [year, month, day]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid) {
      setError("请输入有效的出生日期");
      return;
    }
    navigate(`/result?y=${year}&m=${month}&d=${day}`);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <Field label="年" value={year} onChange={setYear} placeholder="1994" maxLength={4} />
        <Field label="月" value={month} onChange={setMonth} placeholder="05" maxLength={2} />
        <Field label="日" value={day} onChange={setDay} placeholder="01" maxLength={2} />
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

const Field = ({
  label, value, onChange, placeholder, maxLength,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; maxLength: number;
}) => (
  <label className="block">
    <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
    <Input
      inputMode="numeric"
      pattern="[0-9]*"
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
      className="h-14 rounded-none border-x-0 border-t-0 border-b-2 border-ink/20 bg-transparent text-center font-display text-2xl text-ink shadow-none focus-visible:border-brand focus-visible:ring-0"
    />
  </label>
);

export default BirthdayForm;