import React, { useState } from 'react'
import { Login } from './pages/Login'
import { Properties } from './pages/Properties'
import { EntryEditor } from './pages/EntryEditor'

type Screen = { name: 'login' } | { name: 'properties' } | { name: 'editor'; entryId: string }

export function App() {
  const [userName, setUserName] = useState('')
  const [screen, setScreen] = useState<Screen>({ name: 'login' })

  if (screen.name === 'login') {
    return (
      <Login
        onLogin={(name) => {
          setUserName(name)
          setScreen({ name: 'properties' })
        }}
      />
    )
  }

  if (screen.name === 'editor') {
    return (
      <EntryEditor
        entryId={screen.entryId}
        userName={userName}
        onBack={() => setScreen({ name: 'properties' })}
      />
    )
  }

  return (
    <Properties
      userName={userName}
      onOpenEntry={(id) => setScreen({ name: 'editor', entryId: id })}
    />
  )
}
