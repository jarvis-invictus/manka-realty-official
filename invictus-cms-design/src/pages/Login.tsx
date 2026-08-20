import React, { useState } from 'react'
import {
  LockIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  LoaderCircleIcon,
  ChevronDownIcon,
} from 'lucide-react'
import { Wordmark } from '../components/Wordmark'
import { teamMembers } from '../data/team'

type LoginProps = {
  onLogin: (name: string) => void
}

export function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!name.trim() || !password.trim()) {
      setError('Select your name and enter the workspace password.')
      return
    }
    setError('')
    setBusy(true)
    window.setTimeout(() => onLogin(name.trim()), 550)
  }

  return (
    <main className="flex min-h-full w-full items-center justify-center bg-canvas px-6 py-12">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex justify-center">
          <Wordmark size="lg" />
        </div>

        <div className="rounded-card border border-line bg-white p-8 shadow-card">
          <h1 className="text-[19px] font-semibold tracking-tight text-ink">Sign in to the CMS</h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            Every change is attributed, so tell us who's editing today.
          </p>

          <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="editor-name" className="mb-1.5 block text-[13px] font-medium text-ink">
                Your name
              </label>
              <div className="relative">
                <UserIcon
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
                  aria-hidden="true"
                />
                <select
                  id="editor-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`h-11 w-full appearance-none rounded-[10px] border border-line bg-white pl-9 pr-9 text-sm outline-none transition-colors duration-150 focus:border-navy-800 focus:ring-2 focus:ring-navy-100 ${
                    name ? 'text-ink' : 'text-ink-soft'
                  }`}
                >
                  <option value="">Select your name</option>
                  {teamMembers.map((member) => (
                    <option key={member} value={member}>
                      {member}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-[13px] font-medium text-ink">
                Password
              </label>
              <div className="relative">
                <LockIcon
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
                  aria-hidden="true"
                />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="h-11 w-full rounded-[10px] border border-line bg-white pl-9 pr-10 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft focus:border-navy-800 focus:ring-2 focus:ring-navy-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-ink-soft transition-colors duration-150 hover:bg-canvas hover:text-ink"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <EyeIcon className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {error ? (
              <p role="alert" className="text-[13px] font-medium text-red-600">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={busy}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-navy-800 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 focus-visible:ring-offset-2 disabled:opacity-70"
            >
              {busy ? <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
              {busy ? 'Signing in…' : 'Log In'}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-ink-soft">
          Invictus CMS · Manka Realty · Internal use only
        </p>
      </div>
    </main>
  )
}
