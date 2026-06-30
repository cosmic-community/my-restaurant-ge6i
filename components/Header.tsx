'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/reviews', label: 'Reviews' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-noir-900/95 backdrop-blur border-b border-noir-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-bold gold-text tracking-wide">
            My Restaurant
          </span>
          <span className="text-[10px] tracking-[0.35em] text-noir-600 uppercase mt-1">
            Prime Steakhouse
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-cream/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-noir-800 border-t border-noir-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-cream/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}