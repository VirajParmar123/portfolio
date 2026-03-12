 'use client'

import { useEffect, useRef, useState } from 'react'

type Message = {
  id: number
  from: 'user' | 'bot'
  text: string
}

const SUGGESTED_QUESTIONS = [
  'What roles are you looking for?',
  'What skills do you have?',
  'Tell me about your experience.',
  'Where are you studying?',
  'How can I contact you?',
  'Can I see your resume?',
] as const

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: 'bot',
      text:
        "Hey there! I'm Viraj's portfolio assistant. You can click a question below or type your own to ask about skills, experience, university, or how to get in touch.",
    },
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const nextId = useRef(2)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    const el = containerRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
    inputRef.current?.focus()
  }, [isOpen, messages])

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const pushMessage = (from: 'user' | 'bot', text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: nextId.current++,
        from,
        text,
      },
    ])
  }

  const reply = (userText: string) => {
    const t = userText.toLowerCase()

    if (t.includes('skill') || t.includes('stack') || t.includes('tech')) {
      return [
        "I’m strong with AWS, Docker, Kubernetes, CI/CD, and full‑stack JavaScript (MERN). I’m also comfortable with Python and Java for backend work.",
        'For a detailed list, scroll to the Skills section on this page.',
      ].join(' ')
    }

    if (t.includes('experience') || t.includes('work') || t.includes('intern')) {
      return [
        'I have hands‑on experience with cloud infrastructure, DevOps tooling, and full‑stack projects.',
        'You can see the timeline and responsibilities in the Experience section.',
      ].join(' ')
    }

    if (t.includes('study') || t.includes('university') || t.includes('college') || t.includes('rowan')) {
      return [
        'I’m currently pursuing my MS in Computer Science at Rowan University.',
        'You can find more academic details in the Education section.',
      ].join(' ')
    }

    if (t.includes('contact') || t.includes('email') || t.includes('reach')) {
      return [
        'You can reach me quickly at parmarviraj.m04@gmail.com.',
        'There are also direct links to my social profiles and email in the Contact section at the bottom of this page.',
      ].join(' ')
    }

    if (t.includes('resume') || t.includes('cv')) {
      return [
        'You can download my latest resume from the Resume section using the “Download Resume” button.',
        'If you want, you can also ask me about specific parts of the resume, like projects or skills.',
      ].join(' ')
    }

    if (t.includes('role') || t.includes('position') || t.includes('looking for')) {
      return 'I’m currently seeking Summer 2026 internship opportunities in Software Engineering, Cloud Engineering, or DevOps.'
    }

    if (t.includes('project') || t.includes('portfolio') || t.includes('site')) {
      return [
        'This portfolio highlights my work in cloud, DevOps, and full‑stack engineering.',
        'Feel free to ask about any specific project you see here or on my resume.',
      ].join(' ')
    }

    return [
      "That's a great question! I might not have the perfect answer built into this assistant yet,",
      'but you can usually find more details in the Skills, Experience, Education, Resume, or Contact sections.',
      'You can also message me directly via the Contact section if you have something specific in mind.',
    ].join(' ')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isThinking) return

    pushMessage('user', trimmed)
    setInput('')
    setIsThinking(true)

    setTimeout(() => {
      const botText = reply(trimmed)
      pushMessage('bot', botText)
      setIsThinking(false)
    }, 550)
  }

  const handleQuickQuestion = (text: string) => {
    if (!isOpen) setIsOpen(true)
    setInput(text)
    // Give a small delay so input shows up, then submit
    setTimeout(() => {
      const fakeEvent = { preventDefault() {} } as React.FormEvent
      handleSubmit(fakeEvent)
    }, 50)
  }

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="chatbot-toggle"
          onClick={toggleOpen}
          aria-label="Open chat"
        >
          <i className="fas fa-comments" />
        </button>
      )}

      <div className={`chatbot-panel ${isOpen ? 'chatbot-panel-open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-main">
            <span className="chatbot-title">Chat with Viraj</span>
            <span className="chatbot-status">
              <span className="chatbot-dot" /> Typically replies within a few minutes
            </span>
          </div>
          <button
            type="button"
            className="chatbot-close"
            onClick={toggleOpen}
            aria-label="Close chat"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="chatbot-body">
          <div className="chatbot-messages" ref={containerRef}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chatbot-message ${
                  m.from === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'
                }`}
              >
                {m.from === 'bot' && (
                  <div className="chatbot-avatar">
                    <span>VP</span>
                  </div>
                )}
                <div className="chatbot-bubble">{m.text}</div>
              </div>
            ))}

            {isThinking && (
              <div className="chatbot-message chatbot-message-bot">
                <div className="chatbot-avatar">
                  <span>VP</span>
                </div>
                <div className="chatbot-bubble chatbot-bubble-typing">
                  <span className="chatbot-dot-typing" />
                  <span className="chatbot-dot-typing" />
                  <span className="chatbot-dot-typing" />
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-quick">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                className="chatbot-chip"
                onClick={() => handleQuickQuestion(q)}
              >
                {q}
              </button>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your own question here…"
              className="chatbot-input"
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={!input.trim() || isThinking}
            >
              {isThinking ? (
                <i className="fas fa-circle-notch fa-spin" />
              ) : (
                <i className="fas fa-paper-plane" />
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

