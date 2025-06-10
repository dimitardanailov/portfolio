export const shortCodeType = `export type ShortCode = string & { __length: 7 }`

export const shortenedLinkType = `export type ShortenedLink = {
  id: string // Unique identifier for the database record
  appId: string // For multi-tenancy or application segregation
  shortCode: ShortCode // The unique, generated short key
  originalLink: string // The full original URL
  clicks: number // Counter for redirection analytics
}`

export const shortenedLinkClickType = `import { ShortCode } from './ShortenedLink'
import { Timestamp } from 'firebase/firestore'

export type ShortenedLinkClick = {
  id: string // Unique ID for each click event
  appId: string // Linking to the application/tenant
  shortCode: ShortCode // The short code that was clicked
  timestamp: Timestamp // When the click occurred (server-side recommended)
  orginalLink: string // The original link at the time of click
}`
