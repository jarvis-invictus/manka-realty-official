import React from 'react'

const controlClass =
  'w-full rounded-[10px] border border-line bg-white px-3 text-[13px] text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft focus:border-navy-800 focus:ring-2 focus:ring-navy-100'

type BaseProps = {
  label: string
  id: string
}

export function TextField({
  label,
  id,
  value,
  onChange,
  placeholder,
}: BaseProps & { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-medium text-ink-muted">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`h-10 ${controlClass}`}
      />
    </div>
  )
}

export function SelectField({
  label,
  id,
  value,
  options,
  onChange,
}: BaseProps & { value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-medium text-ink-muted">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-10 appearance-none bg-[length:16px] pr-8 ${controlClass}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export function TextAreaField({
  label,
  id,
  value,
  onChange,
  rows = 5,
}: BaseProps & { value: string; onChange: (value: string) => void; rows?: number }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-medium text-ink-muted">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`py-2.5 leading-relaxed ${controlClass}`}
      />
    </div>
  )
}

export function ToggleField({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-canvas px-3.5 py-3">
      <div>
        <p className="text-[13px] font-medium text-ink">{label}</p>
        <p className="mt-0.5 text-[12px] text-ink-soft">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 focus-visible:ring-offset-2 ${
          checked ? 'bg-navy-800' : 'bg-slate-300'
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            checked ? 'translate-x-[22px]' : 'translate-x-0.5'
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
